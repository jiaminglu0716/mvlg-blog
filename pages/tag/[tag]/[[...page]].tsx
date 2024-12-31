import { postFields } from "../../../modules";
import { Pagination } from "../../../services/common/utils/Pagination";
import { LayoutQueryService } from "../../../services/layout/query/LayoutQueryService";
import { PostQueryService } from "../../../services/post/query/PostQueryService";
import PostsPage from "../../posts/[[...page]]";

export default PostsPage;

const postQueryService = new PostQueryService();
const pageSize = 10;

type Params = {
  params: {
    tag: string;
    page: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const tag = params.tag;
  const argpage = params.page;

  const page = argpage
    ? parseInt(argpage[0]) > 1
      ? parseInt(argpage[0])
      : 1
    : 1;
  const pagination = Pagination.pagination(page, pageSize);
  const posts = postQueryService.listPostsByTag(
    tag,
    postFields.note,
    pagination
  );
  const total = postQueryService.countPostsByTag(tag);

  return {
    props: {
      posts,
      pagination: pagination.get(total),
      layout: new LayoutQueryService().queryLayoutData(),
    },
  };
}

export async function getStaticPaths() {
  const tags = postQueryService.listTags();
  const pagination = Pagination.pagination(1, pageSize);

  const pages = [];

  tags.map(({ title }) => {
    const total = postQueryService.countPostsByTag(title);

    for (let page = 1; page <= pagination.num(total); page++) {
      pages.push({
        params: {
          tag: title,
          page: [page.toString()],
        },
      });
    }

    pages.push({
      params: {
        tag: title,
        page: undefined,
      },
    });
  });

  return {
    paths: pages,
    fallback: false,
  };
}
