import { InferGetStaticPropsType } from "next";
import BlockLayoutContainer from "../../web/containers/web/layout";
import ViewContainer from "../../web/components/container/view-container";
import { LayoutQueryService } from "../../server/services/layout/query/LayoutQueryService";
import RadiusContainer from "../../web/components/container/radius-container";
import { BlockValueType, DivProps } from "../../web/components/common/props";
import { classNames } from "../../web/common/utils";
import ButtonSM from "../../web/components/button/button-sm";
import CaterpillarPageItems from "../../web/components/pagination/caterpillar-page-items";
import IconChevronRight from "../../web/components/icons/icon-chevron-right";
import IconChevronLeft from "../../web/components/icons/icon-chevron-left";
import { CaterpillarPageItemProps } from "../../web/components/pagination/caterpillar-page-items";
import IconSNSTwitterStroke from "../../web/components/icons/icon-sns-twi-stroke";
import { useEffect, useState } from "react";
import usePageState from "../../web/hooks/usePageState";
import { pageBound } from "../../lib/pagination";

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
  const { page, prevPage, nextPage } = usePageState();
  const [items, setItems] = useState([]);

  const data: BlockValueType<number>[] = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      text: `If u Ok Tell bme  ${i}`,
      value: i,
      onClick() {
        console.log(i);
      },
    });
  }
  const total = data.length;
  const size = 8;

  function flushItems() {
    const [left, right] = pageBound(page, size, size, total);
    const displayItems = data.slice(left, right);
    setItems(displayItems);
  }

  useEffect(() => {
    flushItems();
  }, [page]);

  return (
    <RadiusContainer className="w-[456px] h-auto">
      <RadiusContainer className="text-lg font-bold h-10 flex items-center justify-center mx-3 mb-1 mt-3 w-auto">
        Links
      </RadiusContainer>
      <div className="flex flex-wrap">
        {items.map((item, index: number) => {
          return (
            <div key={index} className="w-1/2">
              <RadiusContainer className="w-auto h-12 m-2 flex items-center">
                <div className="m-2">
                  <IconSNSTwitterStroke size="38px" />
                </div>
                <div className="w-full text-md text-left">{item.text}</div>
              </RadiusContainer>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <ButtonSM className="m-2" onClick={prevPage}>
          <IconChevronLeft size="24" />
        </ButtonSM>
        <ButtonSM
          className="m-2"
          onClick={page * size < total ? nextPage : null}
        >
          <IconChevronRight size="24" />
        </ButtonSM>
      </div>
    </RadiusContainer>
  );
}

export default function HomePage({
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BlockLayoutContainer {...layout}>
      <ViewContainer className="flex flex-wrap justify-center font-serif py-8">
        <CaterpillarIconHalfBlock title="Basic" />
        <CaterpillarIconHalfBlock title="Services" />
        <LinksBlock />
      </ViewContainer>
    </BlockLayoutContainer>
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
