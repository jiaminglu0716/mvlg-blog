import type { InferGetStaticPropsType } from "next";
import { Archive } from "../../server/services/post/domain/Archive";
import { QListPost } from "../../server/services/post/query/QListPost";
import { PostQueryService } from "../../server/services/post/query/PostQueryService";
import { Post } from "../../server/services/post/domain/Post";
import ArchivesView from "../../web/views/web/archives-view";
import BlockLayoutContainer from "../../web/containers/web/layout";
import { LayoutQueryService } from "../../server/services/layout/query/LayoutQueryService";
import { LayoutDataType } from "../../web/interfaces/api";
import { Facade } from "../../web/infras/facade";

export default function ArchivesPage({
  archives,
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const layoutData: LayoutDataType = Facade.toLayoutData(layout);
  return (
    <BlockLayoutContainer {...layoutData}>
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
