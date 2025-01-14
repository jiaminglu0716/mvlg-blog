import type { InferGetStaticPropsType } from "next";
import { PostQueryService } from "../../server/services/post/query/PostQueryService";
import { PostRepository } from "../../server/services/post/infrastructure/PostRepository";
import { QListPost } from "../../server/services/post/query/QListPost";
import PostView from "../../web/views/web/post-view";
import BlockLayoutContainer from "../../web/containers/web/layout";
import { LayoutQueryService } from "../../server/services/layout/query/LayoutQueryService";
import { Facade } from "../../web/infras/facade";
import { LayoutDataType, PostType } from "../../web/interfaces/api";

export default function PostPage({
  post,
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const postData: PostType = Facade.toPost(post);
  const layoutData: LayoutDataType = Facade.toLayoutData(layout);

  return (
    <BlockLayoutContainer {...layoutData}>
      <PostView post={postData} />
    </BlockLayoutContainer>
  );
}

type Params = {
  params: {
    slugs: string[];
  };
};

export async function getStaticProps({ params }: Params) {
  const postRepository = new PostRepository();
  const post: QListPost = postRepository.bySlugs(params.slugs).get();
  return {
    props: {
      post: {
        ...post,
      },
      layout: new LayoutQueryService().queryLayoutData(),
    },
  };
}

export async function getStaticPaths() {
  const postQueryService = new PostQueryService();
  const posts = postQueryService.listPosts(["slugs"]);
  return {
    paths: posts.map(({ slugs }) => {
      return {
        params: {
          slugs,
        },
      };
    }),
    fallback: false,
  };
}
