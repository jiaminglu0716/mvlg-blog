import { useRouter } from "next/router";
import ErrorPage from "next/error";
import ViewContainer from "../../components/container/view-container";
import Head from "next/head";
import PostModule from "../../containers/web/module/post-module";
import { PostType } from "../../interfaces/api";

type PostViewProps = { post: PostType };

export default function PostView(props: PostViewProps) {
  const { post } = props;
  const router = useRouter();

  if (!router.isFallback && !post?.slugs) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <ViewContainer>
      <Head>
        <title>{post.title}</title>
      </Head>

      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <div className="m-auto">
          <PostModule post={post} />
        </div>
      )}
    </ViewContainer>
  );
}
