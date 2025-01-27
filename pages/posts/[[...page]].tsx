import type { InferGetStaticPropsType } from "next";
import { PostQueryService } from "../../server/services/post/query/PostQueryService";
import { Pagination } from "../../lib/pagination";
import PostsView from "../../web/views/web/posts-view";
import { LayoutQueryService } from "../../server/services/layout/query/LayoutQueryService";
import BlockLayoutContainer from "../../web/containers/web/layout";
import { Facade } from "../../web/infras/facade";
import { LayoutDataType, PostType } from "../../web/interfaces/api";

const postQueryService = new PostQueryService();

const pageSize = 10;

export default function PostsPage({
  posts,
  pagination,
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const postsData: PostType[] = Facade.toPosts(posts);
  const layoutData: LayoutDataType = Facade.toLayoutData(layout);

  return (
    <BlockLayoutContainer {...layoutData}>
      <PostsView posts={postsData} pagination={pagination} />
    </BlockLayoutContainer>
  );
}

type Params = {
  params: {
    page: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const argpage = params.page;
  const postFields = [
    "type",
    "slugs",
    "title",
    "excerpt",
    "date",
    "link",
    "tags",
    "cover",
    "star",
    "meta",
  ];

  // const page = parseInt(argpage) ?? 1;
  const page = argpage
    ? parseInt(argpage[0]) > 1
      ? parseInt(argpage[0])
      : 1
    : 1;
  const pagination = Pagination.pagination(page, pageSize);
  const posts = postQueryService.listPosts(postFields, pagination);
  const total = postQueryService.countPosts();

  return {
    props: {
      posts,
      pagination: pagination.get(total),
      layout: new LayoutQueryService().queryLayoutData(),
    },
  };
}

export async function getStaticPaths() {
  const pagination = Pagination.pagination(1, pageSize);
  const total = postQueryService.countPosts();
  const pages = [];

  // for page router
  for (let page = 1; page <= pagination.num(total); page++) {
    pages.push({
      params: {
        page: [page.toString()],
      },
    });
  }

  // for root router
  pages.push({
    params: {
      page: undefined,
    },
  });

  return {
    paths: pages,
    fallback: false,
  };
}
