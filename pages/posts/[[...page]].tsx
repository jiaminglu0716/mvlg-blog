import type { InferGetStaticPropsType } from "next";
import { postFields } from "../../modules";
import { PostQueryService } from "../../services/post/query/PostQueryService";
import { Pagination } from "../../services/common/utils/Pagination";
import PostsView from "../../views/web/posts-view";

const postQueryService = new PostQueryService();

const pageSize = 10;

export default function PostsPage({
  posts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return PostsView({ posts, pagination });
}

type Params = {
  params: {
    page: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const argpage = params.page;

  // const page = parseInt(argpage) ?? 1;
  const page = argpage
    ? parseInt(argpage[0]) > 1
      ? parseInt(argpage[0])
      : 1
    : 1;
  const pagination = Pagination.pagination(page, pageSize);
  const posts = postQueryService.listPosts(postFields.note, pagination);
  const total = postQueryService.countPosts();

  return {
    props: { posts, pagination: pagination.get(total) },
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
