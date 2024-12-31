import type { InferGetStaticPropsType } from "next";
import { Archive } from "../../services/post/domain/Archive";
import { QListPost } from "../../services/post/query/QListPost";
import { PostQueryService } from "../../services/post/query/PostQueryService";
import { Post } from "../../services/post/domain/Post";
import ArchivesView from "../../views/web/archives-view";
import BlockLayoutContainer from "../../containers/web/layout";
import { LayoutQueryService } from "../../services/layout/query/LayoutQueryService";

export default function ArchivesPage({
  archives,
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BlockLayoutContainer {...layout}>
      <ArchivesView archives={archives} />
    </BlockLayoutContainer>
  );
}

export async function getStaticProps() {
  const posts = new PostQueryService()
    .listPosts(["link", "title", "date"])
    .map((post: QListPost) => Post.post().load(post));

  const y2md = Archive.archive()
    .posts(posts)
    .sorted(false)
    .byY2MD<QListPost>((post) => post.get(["link", "title"]));

  return {
    props: {
      archives: y2md,
      layout: new LayoutQueryService().queryLayoutData(),
    },
  };
}
