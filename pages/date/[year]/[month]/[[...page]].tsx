import { and, eq } from "revt-toolkit";
import { postFields } from "../../../../modules";
import { Pagination } from "../../../../services/common/utils/Pagination";
import { ArchiveQueryService } from "../../../../services/post/query/ArchiveQueryService";
import { PostQueryService } from "../../../../services/post/query/PostQueryService";
import PostsView from "../../../../views/web/posts-view";
import { InferGetStaticPropsType } from "next";
import BlockLayoutContainer from "../../../../containers/web/layout";
import { LayoutQueryService } from "../../../../services/layout/query/LayoutQueryService";

export default function DatePostsPage({
  posts,
  pagination,
  condition,
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BlockLayoutContainer {...layout}>
      <PostsView posts={posts} pagination={pagination} condition={condition} />
    </BlockLayoutContainer>
  );
}

const postQueryService = new PostQueryService();
const archiveQueryService = new ArchiveQueryService();
const pageSize = 10;

type Params = {
  params: {
    year: string;
    month: string;
    page: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const year = params.year;
  const month = params.month;
  const argpage = params.page;
  const datestr = `${year}/${month}`;
  const date = new Date(datestr);

  const page = argpage
    ? parseInt(argpage[0]) > 1
      ? parseInt(argpage[0])
      : 1
    : 1;
  const pagination = Pagination.pagination(page, pageSize);

  /**
   * @Bug
   * If we use wrapped service, the error will occur. (ArchiveQueryService)
   *
   * If we use basic service, no error.
   *
   * Um...
   */
  const total = archiveQueryService.countByYearMonth(date);

  const posts = postQueryService.listPostsByFilter(
    (post) =>
      and(
        eq(date.getFullYear(), post.getDate().getFullYear()),
        eq(date.getMonth(), post.getDate().getMonth())
      ),
    postFields.note,
    pagination
  );

  return {
    props: {
      posts: posts,
      pagination: pagination.get(total),
      condition: {
        endWith: datestr,
      },
      layout: new LayoutQueryService().queryLayoutData(),
    },
  };
}

export async function getStaticPaths() {
  const ymdates = archiveQueryService.listYearMonth();
  const pagination = Pagination.pagination(1, pageSize);

  const pages = [];

  ymdates.map((date: Date) => {
    const total = archiveQueryService.countByYearMonth(date);
    const ymdict = {
      year: date.getFullYear().toString(),
      month: (date.getMonth() + 1).toString(),
    };

    for (let page = 1; page <= pagination.num(total); page++) {
      pages.push({
        params: {
          ...ymdict,
          page: [page.toString()],
        },
      });
    }

    pages.push({
      params: {
        ...ymdict,
        page: undefined,
      },
    });
  });

  return {
    paths: pages,
    fallback: false,
  };
}
