import type { InferGetStaticPropsType } from "next";
import { PostQueryService } from "../../services/post/query/PostQueryService";
import TagsView from "../../views/web/tags-view";

export default function TagsPage({
  allTags,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <TagsView tags={allTags} />;
}

export async function getStaticProps() {
  const postQueryRepository = new PostQueryService();
  const allTags = postQueryRepository.listTags();

  return {
    props: { allTags },
  };
}
