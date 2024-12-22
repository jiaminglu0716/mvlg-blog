import { useRouter } from "next/router";
import ButtonCenter from "../../../components/button/button-center";
import NextButtonSM from "../../../components/button/next-button-sm";
import PrevButtonSM from "../../../components/button/prev-button-sm";
import TopButtonSM from "../../../components/button/top-button-sm";
import { classNames } from "../../../lib/utils";
import { useRef } from "react";
import { PaginationInfo } from "../../../services/common/utils/PaginationInfo";
import IconChevronRight from "../../../components/icons/icon-chevron-right";
import { PaginationParamLink } from "../../../services/common/utils/PaginationLink";

const isBrowser = () => typeof window !== "undefined";

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

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
  const pageInputRef = useRef();

  function pageLink(page: number) {
    const link = new PaginationParamLink(router.asPath)
      .root(condition)
      .link(page)
      .withQuery()
      .cget();

    return link;
  }

  function handlePageTo() {
    // get page input text field
    const current = pageInputRef.current as any;

    // calculate page boundary
    const pageIndex = parseInt(current.value);
    const page =
      pageIndex >= pagination.pagenum ? pagination.pagenum : pageIndex;

    // navigate to relative page
    if (page != pagination.page) router.push(pageLink(page));

    // clear page input text
    if (current) current.value = "";
  }

  return (
    <div className="flex justify-between">
      <div>
        <div className="w-[90px] m-2"></div>
      </div>
      <div className="flex">
        <PrevButtonSM
          className="m-2"
          onClick={() => {
            if (pagination.canPrev) router.push(pageLink(pagination.prev));
          }}
        />
        <TopButtonSM className="m-2" onClick={scrollToTop} />
        <NextButtonSM
          className="m-2"
          onClick={() => {
            if (pagination.canNext) router.push(pageLink(pagination.next));
          }}
        />
      </div>
      <div>
        <ButtonCenter
          className={classNames(
            "w-[90px]",
            "h-10",
            "text-sm",
            "m-2",
            "px-2",
            "flex",
            "justify-between"
          )}
        >
          <input
            className="w-12 text-center ml-1 focus:outline-none hover:border-b-2 hover:border-sky-200"
            type="text"
            placeholder={`${pagination.page} / ${pagination.pagenum}`}
            ref={pageInputRef}
          />
          <div className="w-6" onClick={handlePageTo}>
            <IconChevronRight size="24" />
          </div>
        </ButtonCenter>
      </div>
    </div>
  );
}
