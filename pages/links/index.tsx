import type { InferGetStaticPropsType } from "next";
import LinksView from "../../web/views/web/links-view";
import BlockLayoutContainer from "../../web/containers/web/layout";
import { LayoutQueryService } from "../../server/services/layout/query/LayoutQueryService";
import linksData from "../../data/links.json";
import { Facade } from "../../web/infras/facade";
import { LayoutDataType } from "../../web/interfaces/api";

export default function LinksPage({
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const layoutData: LayoutDataType = Facade.toLayoutData(layout);
  return (
    <BlockLayoutContainer {...layoutData}>
      <LinksView links={linksData.links} />
    </BlockLayoutContainer>
  );
}

export async function getStaticProps() {
  return {
    props: { layout: new LayoutQueryService().queryLayoutData() },
  };
}
