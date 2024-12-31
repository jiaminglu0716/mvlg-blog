import type { InferGetStaticPropsType } from "next";
import { PostQueryService } from "../../services/post/query/PostQueryService";
import TagsView from "../../views/web/tags-view";
import BlockLayoutContainer from "../../containers/web/layout";
import { LayoutQueryService } from "../../services/layout/query/LayoutQueryService";

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
