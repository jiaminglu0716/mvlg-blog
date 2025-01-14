import { InferGetStaticPropsType } from "next";
import { LayoutDataType } from "../../web/interfaces/api";
import BlockLayoutContainer from "../../web/containers/web/layout";
import { LayoutQueryService } from "../../server/services/layout/query/LayoutQueryService";
import { Facade } from "../../web/infras/facade";
import { useLocale } from "../../web/hooks/useLocale";
import useLocaleService from "../../web/hooks/useLocaleService";
import { Services } from "../../web/interfaces/service";
import { ChangeEvent } from "react";
import { SettingItemType } from "../../web/containers/web/module/setting-module/setting-item";
import SettingsView from "../../web/views/web/settings-view";

export default function SettingsPage({
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const layoutData: LayoutDataType = Facade.toLayoutData(layout);

  const { lang, language } = useLocaleService();

  const { setLocale } = useLocale();

  const items = [
    {
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
        defaultValue: lang,
        onChange(e: ChangeEvent<HTMLSelectElement>) {
          setLocale(e.target.value as Services);
        },
      },
    },
  ];

  return (
    <BlockLayoutContainer {...layoutData}>
      <SettingsView items={items} />
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
