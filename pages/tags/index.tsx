import type { InferGetStaticPropsType } from "next";
import { PostQueryService } from "../../server/services/post/query/PostQueryService";
import TagsView from "../../web/views/web/tags-view";
import BlockLayoutContainer from "../../web/containers/web/layout";
import { LayoutQueryService } from "../../server/services/layout/query/LayoutQueryService";
import { Facade } from "../../web/infras/facade";
import { LayoutDataType, TagType } from "../../web/interfaces/api";

export default function TagsPage({
  tags,
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const tagsData: TagType[] = Facade.toTags(tags);
  const layoutData: LayoutDataType = Facade.toLayoutData(layout);

  return (
    <BlockLayoutContainer {...layoutData}>
      <TagsView tags={tagsData} />
    </BlockLayoutContainer>
  );
}

export async function getStaticProps() {
  const postQueryRepository = new PostQueryService();
  const tags = postQueryRepository.listTags();

  return {
    props: { tags, layout: new LayoutQueryService().queryLayoutData() },
  };
}
