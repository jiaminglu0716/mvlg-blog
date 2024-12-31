import { InferGetStaticPropsType } from "next";
import { PostQueryService } from "../../services/post/query/PostQueryService";
import BlockLayoutContainer from "../../containers/web/layout";
import ViewContainer from "../../components/container/view-container";
import { LayoutQueryService } from "../../services/layout/query/LayoutQueryService";
import RadiusContainer from "../../components/container/radius-container";
import { BlockValueType, DivProps } from "../../components/common/props";
import { classNames } from "../../lib/utils";
import ButtonSM from "../../components/button/button-sm";
import IconSNSTwitterFill from "../../components/icons/icon-sns-twi-fill";
import CaterpillarPageItems from "../../components/pagination/caterpillar-page-items";
import IconChevronRight from "../../components/icons/icon-chevron-right";
import IconChevronLeft from "../../components/icons/icon-chevron-left";
import {
  CaterpillarPageItemProps,
  CaterpillarItemType,
} from "../../components/pagination/caterpillar-page-items";
import IconSNSTwitterStroke from "../../components/icons/icon-sns-twi-stroke";

function FullBlock(props: DivProps) {
  const { className, children } = props;
  return (
    <div className={classNames("w-full md:p-20", className)}>
      <RadiusContainer className=" w-auto">{children}</RadiusContainer>
    </div>
  );
}

function HalfBlock(props: DivProps) {
  const { className, children } = props;
  return (
    <div className={classNames("w-full md:w-1/2 md:p-20", className)}>
      <RadiusContainer className="w-auto">{children}</RadiusContainer>
    </div>
  );
}

function BlockIconItem({
  page,
  setPage,
  isPrev,
  isNext,
  className,
  ...props
}: { icon?: React.ReactNode } & CaterpillarPageItemProps<number>) {
  let item;
  if (isPrev)
    item = (
      <ButtonSM onClick={() => setPage(page - 1)}>
        <IconChevronLeft size="24" />
      </ButtonSM>
    );
  else if (isNext)
    item = (
      <ButtonSM onClick={() => setPage(page + 1)}>
        <IconChevronRight size="24" />
      </ButtonSM>
    );
  else
    item = (
      <ButtonSM>
        <IconSNSTwitterStroke size="24px" />
      </ButtonSM>
    );

  return (
    <div
      className={classNames("flex justify-center p-2", className)}
      {...props}
    >
      {item}
    </div>
  );
}

function CaterpillarIconHalfBlock({ title }: { title: string }) {
  const items: BlockValueType<number>[] = [];
  for (let i = 0; i < 20; i++) {
    items.push({
      text: `${i}`,
      value: i,
      onClick() {
        console.log(i);
      },
    });
  }
  return (
    <RadiusContainer className="w-52 m-5 h-auto">
      {title ? (
        <RadiusContainer className="text-lg font-bold h-10 flex items-center justify-center mx-3 mb-1 mt-3 w-auto">
          {title}
        </RadiusContainer>
      ) : null}
      <CaterpillarPageItems
        className="mx-1 my-2"
        data={items}
        limit={12}
        Item={BlockIconItem}
        itemProps={{
          style: {
            width: 25 + "%",
          },
        }}
      />
    </RadiusContainer>
  );
}
function LinksBlock() {
  return (
    <RadiusContainer className="w-[456px] h-80">
      <RadiusContainer className="text-lg font-bold h-10 flex items-center justify-center mx-3 mb-1 mt-3 w-auto">
        Links
      </RadiusContainer>
    </RadiusContainer>
  );
}

export default function HomePage({
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ViewContainer className="flex flex-wrap justify-center font-serif py-8">
      <CaterpillarIconHalfBlock title="Basic" />
      <CaterpillarIconHalfBlock title="Services" />
      {/* <LinksBlock /> */}
    </ViewContainer>
  );
}

export async function getStaticProps() {
  const layout = new LayoutQueryService().queryLayoutData();

  return {
    props: {
      layout,
    },
  };
}
