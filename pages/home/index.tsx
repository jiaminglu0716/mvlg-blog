import { InferGetStaticPropsType } from "next";
import BlockLayoutContainer from "../../web/containers/web/layout";
import { LayoutQueryService } from "../../server/services/layout/query/LayoutQueryService";
import { Facade } from "../../web/infras/facade";
import { LayoutDataType } from "../../web/interfaces/api";
import HomeView from "../../web/views/web/home-view";
import useLocaleService from "../../web/hooks/useLocaleService";

export default function HomePage({
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const layoutData: LayoutDataType = Facade.toLayoutData(layout);

  const { homepage: homeData } = useLocaleService();

  return (
    <BlockLayoutContainer {...layoutData}>
      <HomeView pagedata={homeData} />
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
