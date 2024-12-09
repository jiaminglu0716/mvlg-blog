import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/common/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllPosts, getPostBySlugs, postFields } from "../../modules";
import markdownToHtml from "../../lib/markdownToHtml";
import Head from "next/head";

export default function PostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (!router.isFallback && !post?.slugs) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      <Head>
        <title>{post.title} | My awesome blog</title>
      </Head>

      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <div>
          <article>
            <header>
              <h1 className="text-4xl font-bold">{post.title}</h1>
              {post.excerpt ? (
                <p className="mt-2 text-xl">{post.excerpt}</p>
              ) : null}
              <time className="flex mt-2 text-gray-400">
                {distanceToNow(new Date(post.date))}
              </time>
            </header>

            <div
              className="prose mt-10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* <Comment /> */}
        </div>
      )}
    </Container>
  );
}

type Params = {
  params: {
    slugs: string[];
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlugs(params.slugs, postFields.post);
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
  const posts = getAllPosts(postFields.slugs);
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
