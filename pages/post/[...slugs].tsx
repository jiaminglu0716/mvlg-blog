import type { InferGetStaticPropsType } from "next";
import markdownToHtml from "../../lib/markdownToHtml";
import { PostQueryService } from "../../services/post/query/PostQueryService";
import { PostRepository } from "../../services/post/infrastructure/PostRepository";
import { QListPost } from "../../services/post/query/QListPost";
import PostView from "../../views/web/post-view";

export default function PostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <PostView post={post} />;
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
