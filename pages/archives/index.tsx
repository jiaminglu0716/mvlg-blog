import type { InferGetStaticPropsType } from "next";
import { Archive } from "../../server/services/post/domain/Archive";
import { QListPost } from "../../server/services/post/query/QListPost";
import { PostQueryService } from "../../server/services/post/query/PostQueryService";
import ArchivesView from "../../web/views/web/archives-view";
import BlockLayoutContainer from "../../web/containers/web/layout";
import { LayoutQueryService } from "../../server/services/layout/query/LayoutQueryService";
import { LayoutDataType, PostType } from "../../web/interfaces/api";
import { Facade } from "../../web/infras/facade";
import {
  getPostByData,
  getPostExFieldsByType,
} from "../../server/services/post/utils/postType";

export default function ArchivesPage({
  archives,
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const layoutData: LayoutDataType = Facade.toLayoutData(layout);
  const archivesData: ArchiveY2MD<PostType> = Facade.toArchivesY2MD(archives);

  return (
    <BlockLayoutContainer {...layoutData}>
      <ArchivesView archives={archivesData} />
    </BlockLayoutContainer>
  );
}

export async function getStaticProps() {
  const posts = new PostQueryService()
    .listPosts(["link", "title", "date"])
    .map((post: QListPost) => getPostByData(post));

  const y2md = Archive.archive()
    .posts(posts)
    .sorted(false)
    .byY2MD<QListPost>((post) =>
      post.get(getPostExFieldsByType(post.getType(), ["link", "title"]))
    );

  return {
    props: {
      archives: y2md,
      layout: new LayoutQueryService().queryLayoutData(),
    },
  };
}
