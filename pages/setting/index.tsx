import { InferGetStaticPropsType } from "next";
import { LayoutDataType } from "../../web/interfaces/api";
import BlockLayoutContainer from "../../web/containers/web/layout";
import { LayoutQueryService } from "../../server/services/layout/query/LayoutQueryService";
import { Facade } from "../../web/infras/facade";
import { useLocale } from "../../web/hooks/useLocale";
import useLocaleService from "../../web/hooks/useLocaleService";
import { Services } from "../../web/interfaces/service";
import { ChangeEvent, useState } from "react";
import { SettingItemType } from "../../web/containers/web/module/setting-module/setting-item";
import SettingsView from "../../web/views/web/settings-view";
import {
  AppSettings,
  AppSettingsConfig,
} from "../../web/common/config/app-setting";
import { diffExecDict, updatedDictPipe } from "../../lib/dict";

/**
 * @FailurePage
 * Now, just use for locale switch.
 * We have to complete all as th following list:
 * > provide a root settings
 * > change the root settings
 * > access any root setting
 * > quick S/L root settings
 * > build a tasker mapper when the setting change
 */
export default function SettingsPage({
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const layoutData: LayoutDataType = Facade.toLayoutData(layout);

  const appSettings = new AppSettings();

  const { lang, language } = useLocaleService();
  const { setLocale } = useLocale();

  const [languageValue, setLanguageValue] = useState<Services>(lang);

  // const [form, setForm] = useState<{
  //   language: Services;
  // }>({
  //   language: lang,
  // });

  const [form, setForm] = useState<AppSettingsConfig>(appSettings.settings());

  const items = [
    {
      value: "language",
      type: SettingItemType.SELECT_MENU,
      props: {
        title: language,
        options: [
          {
            text: "English",
            value: "en",
          },
          {
            text: "Chinese",
            value: "hk",
          },
        ],
        value: languageValue,
        onChange(e: ChangeEvent<HTMLSelectElement>) {
          const service = e.target.value as Services;
          setLanguageValue(service);
          updateValue(service, "locale");
        },
      },
    },
  ];

  function updateValue(value: string, key: string) {
    setForm((form) => updatedDictPipe(form, value, key));
  }

  function onSubmit() {
    appSettings.setAll(form, (key, d1, form) => {
      switch (key) {
        case "locale":
          if (lang != form.locale) setLocale(form.locale);
          break;
      }
    });

    console.log(appSettings.settings());
  }

  return (
    <BlockLayoutContainer {...layoutData}>
      <SettingsView items={items} onSubmit={onSubmit} />
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
