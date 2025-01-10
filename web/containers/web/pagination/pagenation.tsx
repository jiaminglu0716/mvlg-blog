import { useRouter } from "next/router";
import SimplePagination from "../../../components/pagination/simple-pagenation";
import { PaginationParamLink } from "../../../common/PaginationLink";
import { PaginationInfo } from "../../../../lib/pagination";

export default function PaginationContainer({
  pagination,
  condition,
}: {
  pagination: PaginationInfo;
  condition?: {
    endWith: string;
  };
}) {
  const router = useRouter();

  function pageLink(page: number) {
    const link = new PaginationParamLink(router.asPath)
      .root(condition)
      .link(page)
      .withQuery()
      .cget();

    return link;
  }

  function handlePageTo(current) {
    // calculate page boundary
    const pageIndex = parseInt(current.value);
    const page =
      pageIndex >= pagination.pagenum ? pagination.pagenum : pageIndex;

    // navigate to relative page
    if (page != pagination.page) router.push(pageLink(page));

    // clear page input text
    if (current) current.value = "";
  }

  function handlePageNext() {
    if (pagination.canNext) router.push(pageLink(pagination.next));
  }

  function handlePagePrev() {
    if (pagination.canPrev) router.push(pageLink(pagination.prev));
  }

  return (
    <SimplePagination
      pagination={pagination}
      handlePageTo={handlePageTo}
      handlePageNext={handlePageNext}
      handlePagePrev={handlePagePrev}
    />
  );
}
