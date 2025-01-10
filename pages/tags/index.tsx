import type { InferGetStaticPropsType } from "next";
import { PostQueryService } from "../../server/services/post/query/PostQueryService";
import TagsView from "../../web/views/web/tags-view";
import BlockLayoutContainer from "../../web/containers/web/layout";
import { LayoutQueryService } from "../../server/services/layout/query/LayoutQueryService";

export default function TagsPage({
  tags,
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BlockLayoutContainer {...layout}>
      <TagsView tags={tags} />
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
