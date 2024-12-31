import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { QListPost } from "../../services/post/query/QListPost";
import ViewContainer from "../../components/container/view-container";
import Head from "next/head";
import PrevNextNavigation from "../../containers/web/navigation/prev-next-navigation";
import PostModule from "../../containers/web/module/post-module";

export default function PostView({ post }: { post: QListPost }) {
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
          <hr />
          <PrevNextNavigation className="max-w-3xl m-auto" />
        </div>
      )}
    </ViewContainer>
  );
}
