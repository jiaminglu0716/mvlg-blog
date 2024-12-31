import ButtonCenter from "../button/button-center";
import NextButtonSM from "../button/next-button-sm";
import PrevButtonSM from "../button/prev-button-sm";
import TopButtonSM from "../button/top-button-sm";
import { classNames } from "../../lib/utils";
import { useRef } from "react";
import { PaginationInfo } from "../../services/common/utils/PaginationInfo";
import IconChevronRight from "../icons/icon-chevron-right";
import { DivProps } from "../common/props";

const isBrowser = () => typeof window !== "undefined";

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

type SimplePaginationProps = {
  pagination: PaginationInfo;
  handlePageTo?: (current: any) => void;
  handlePageNext?: () => void;
  handlePagePrev?: () => void;
  handleCenter?: () => void;
} & DivProps;

export default function SimplePagination({
  pagination,
  handlePageTo,
  handlePageNext,
  handlePagePrev,
  handleCenter,
  className,
  ...props
}: SimplePaginationProps) {
  const pageInputRef = useRef();

  return (
    <div className={classNames("flex justify-between", className)} {...props}>
      <div>
        <div className="w-[90px] m-2"></div>
      </div>
      <div className="flex">
        <PrevButtonSM className="m-2" onClick={handlePagePrev} />
        <TopButtonSM className="m-2" onClick={handleCenter ?? scrollToTop} />
        <NextButtonSM className="m-2" onClick={handlePageNext} />
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
          <div
            className="w-6"
            onClick={() => {
              // get page input text field
              handlePageTo(pageInputRef.current);
            }}
          >
            <IconChevronRight size="24" />
          </div>
        </ButtonCenter>
      </div>
    </div>
  );
}
