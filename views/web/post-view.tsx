import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { QListPost } from "../../services/post/query/QListPost";
import IconStar from "../../components/icons/icon-star";
import IconShare from "../../components/icons/icon-share";
import { classNames, pixel } from "../../lib/utils";
import ViewContainer from "../../components/container/view-container";
import Head from "next/head";
import PrevButtonSM from "../../components/button/prev-button-sm";
import RadiusContainer from "../../components/common/radius-container";
import Link from "next/link";
import NextButtonSM from "../../components/button/next-button-sm";
import distanceToNow from "../../lib/dateRelative";
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
        <div className="max-w-3xl m-auto">
          <PostModule post={post} />
          <hr />
          <PrevNextNavigation />
        </div>
      )}
    </ViewContainer>
  );
}
