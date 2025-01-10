import Link from "next/link";
import ButtonCenter from "../../../components/button/button-center";
import ButtonSM from "../../../components/button/button-sm";
import RadiusContainer from "../../../components/container/radius-container";
import IconChevronRight from "../../../components/icons/icon-chevron-right";
import { classNames } from "../../../common";
import { Router } from "../../../common";
import { DivProps } from "../../../components/common/props";
import { TagType } from "../../../interfaces/api";

export default function TagBlockContainer<T>({
  tags = [],
  config = {
    limit: 20,
  },
  className,
  ...props
}: {
  tags: any[];
  config?: {
    limit?: number;
  };
} & Omit<DivProps, "children">) {
  const title = "Tag";
  const { limit } = config;
  const bound = tags.length > limit ? limit : tags.length;

  const items = tags.slice(0, bound).map((tag: TagType, index: number) => {
    return (
      <ButtonCenter key={index} className="text-sm w-auto m-2 px-2 py-1 h-6">
        <Link href={tag.href}>{tag.title}</Link>
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
