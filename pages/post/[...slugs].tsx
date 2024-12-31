import type { InferGetStaticPropsType } from "next";
import markdownToHtml from "../../lib/markdownToHtml";
import { PostQueryService } from "../../services/post/query/PostQueryService";
import { PostRepository } from "../../services/post/infrastructure/PostRepository";
import { QListPost } from "../../services/post/query/QListPost";
import PostView from "../../views/web/post-view";
import BlockLayoutContainer from "../../containers/web/layout";
import { LayoutQueryService } from "../../services/layout/query/LayoutQueryService";

export default function PostPage({
  post,
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BlockLayoutContainer {...layout}>
      <PostView post={post} />
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
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
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
