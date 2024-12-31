import Link from "next/link";
import ButtonCenter from "../../../components/button/button-center";
import ButtonSM from "../../../components/button/button-sm";
import RadiusContainer from "../../../components/container/radius-container";
import IconChevronRight from "../../../components/icons/icon-chevron-right";
import { classNames } from "../../../lib/utils";
import { Router } from "../../../config/router-config";
import { QCountTag } from "../../../services/post/query/QCountTagList";
import { DivProps } from "../../../components/common/props";

export default function TagBlockContainer<T>({
  tags = [],
  config = {
    limit: 20,
  },
  className,
  ...props
}: {
  tags: QCountTag[];
  config?: {
    limit?: number;
  };
} & Omit<DivProps, "children">) {
  const title = "Tag";
  const { limit } = config;
  const bound = tags.length > limit ? limit : tags.length;

  const items = tags.slice(0, bound).map((tag: QCountTag, index: number) => {
    return (
      <ButtonCenter key={index} className="text-sm w-auto m-2 px-1.5 py-1 h-6">
        <Link href={Router.tag(tag.title)}>{tag.title}</Link>
      </ButtonCenter>
    );
  });

  return (
    <RadiusContainer
      className={classNames("p-4 font-serif flex-1 items-center", className)}
      {...props}
    >
      <div>
        <div className="mx-2 flex justify-between">
          <ButtonCenter className="w-20 h-10 text-lg mb-3">
            {title}
          </ButtonCenter>
          <ButtonSM>
            <Link href={Router.tags()}>
              <IconChevronRight size="24" />
            </Link>
          </ButtonSM>
        </div>
        <hr />
        <div className="mx-1 my-2 flex flex-wrap justify-left">{items}</div>
      </div>
    </RadiusContainer>
  );
}
