import { InferGetStaticPropsType } from "next";
import BlockLayoutContainer from "../../web/containers/web/layout";
import { LayoutQueryService } from "../../server/services/layout/query/LayoutQueryService";
import homeData from "../../data/home.json";
import { Facade } from "../../web/infras/facade";
import { LayoutDataType } from "../../web/interfaces/api";
import HomeView from "../../web/views/web/home-view";

export default function HomePage({
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const layoutData: LayoutDataType = Facade.toLayoutData(layout);

  return (
    <BlockLayoutContainer {...layoutData}>
      <HomeView data={homeData} />
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
