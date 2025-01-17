import { InferGetStaticPropsType } from "next";
import { LayoutDataType } from "../../web/interfaces/api";
import BlockLayoutContainer from "../../web/containers/web/layout";
import { LayoutQueryService } from "../../server/services/layout/query/LayoutQueryService";
import { Facade } from "../../web/infras/facade";
import { useLocale } from "../../web/hooks/useLocale";
import useLocaleService from "../../web/hooks/useLocaleService";
import { useState } from "react";
import { SettingItemType } from "../../web/containers/web/module/setting-module/setting-item";
import SettingsView from "../../web/views/web/settings-view";
import { updatedDictPipe } from "../../lib/dict";
import {
  AppSettingKeys,
  AppSettingsConfig,
} from "../../web/interfaces/settings";
import { deepClone } from "revt-toolkit";
import { useSetting } from "../../web/hooks/useSetting";
import { getInitializedSettings } from "../../web/contexts/settingContext";

export default function SettingsPage({
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const layoutData: LayoutDataType = Facade.toLayoutData(layout);

  // Get settings data
  const { settings, setSettings } = useSetting();

  // Get locale string data
  const { lang, setting } = useLocaleService();

  // Get locale switcher
  const { setLocale } = useLocale();

  // Build temp settings data
  const [form, setForm] = useState<AppSettingsConfig>(deepClone(settings));

  // Build a state dict to rec seperated items
  const states = {};
  Object.keys(settings).forEach((key: string) => {
    states[key] = useState(() => {
      if (key == "locale") return lang;
      return form[key];
    });
  });

  /**
   * @Settings
   */

  const items = [
    SettingSelectItem("locale", setting.language, [
      {
        text: "English",
        value: "en",
      },
      {
        text: "Chinese",
        value: "hk",
      },
    ]),
    SettingTextItem("searchCountdown", setting.search.countdown),
    SettingTextItem("searchGapTime", setting.search.gaptime),
    SettingSwitchItem("searchBar", setting.search.on),
  ];

  /**
   * @Toolkit
   */

  function updateValue(value: any, key: AppSettingKeys) {
    setForm((form) => updatedDictPipe(form, value, key));
  }

  function updateValueWithExec(
    value: any,
    key: AppSettingKeys,
    func?: () => void
  ) {
    updateValue(value, key);
    if (func) func();
  }

  /**
   * @Config Item Setting Functions
   */
  function SettingSelectItem(
    key: AppSettingKeys,
    text: string,
    options: {
      text: string;
      value: string;
    }[],
    config?: {
      exec?: () => void;
    }
  ) {
    return {
      value: key,
      type: SettingItemType.SELECT_MENU,
      props: {
        title: text,
        options,
        state: states[key],
        onChange: (cvalue) => updateValueWithExec(cvalue, key, config?.exec),
      },
    };
  }

  function SettingTextItem(
    key: AppSettingKeys,
    text: string,
    config?: {
      placehold?: string;
      exec?: () => void;
    }
  ) {
    const placehold = config?.placehold ?? "";

    return {
      value: key,
      type: SettingItemType.TEXT,
      props: {
        title: text,
        state: states[key],
        placehold: placehold,
        onChange: (cvalue) => updateValueWithExec(cvalue, key, config?.exec),
      },
    };
  }

  function SettingSwitchItem(
    key: AppSettingKeys,
    text: string,
    config?: {
      exec?: () => void;
    }
  ) {
    return {
      value: key,
      type: SettingItemType.SWITCH,
      props: {
        title: text,
        state: states[key],
        onChange: (cvalue) => updateValueWithExec(cvalue, key, config?.exec),
      },
    };
  }

  /**
   * @EventHandler Event Control
   */

  function onSubmit() {
    if (lang != form.locale) {
      setLocale(form.locale);
    }

    setSettings(form);
  }

  function onInit() {
    const init = getInitializedSettings();

    Object.keys(form).forEach((key: string) => {
      const [_, setValue] = states[key];
      setValue(init[key]);
    });

    setLocale(init.locale);
    setForm(init);
    setSettings(init);
  }

  return (
    <BlockLayoutContainer {...layoutData}>
      <SettingsView items={items} onInit={onInit} onSubmit={onSubmit} />
    </BlockLayoutContainer>
  );
}

export async function getStaticProps() {
  const layout = new LayoutQueryService().queryLayoutData();

  return {
    props: {
      layout,
    },
  };
}
