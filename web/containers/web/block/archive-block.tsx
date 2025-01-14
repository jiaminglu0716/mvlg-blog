import Link from "next/link";
import ButtonCenter from "../../../components/button/button-center";
import ButtonSM from "../../../components/button/button-sm";
import RadiusContainer from "../../../components/container/radius-container";
import IconChevronRight from "../../../components/icons/icon-chevron-right";
import { useState } from "react";
import IconChevronLeft from "../../../components/icons/icon-chevron-left";
import { classNames } from "../../../common/utils";
import { useRouter } from "next/router";
import { distinct, findDictFromArray } from "../../../../lib/array";
import { BlockValueType, DivProps } from "../../../components/common/props";
import CaterpillarPageItems, {
  CaterpillarPageItemProps,
} from "../../../components/pagination/caterpillar-page-items";
import { Router } from "../../../common";
import useLocaleService from "../../../hooks/useLocaleService";

/**
 * React.ReactNode
 */
function Item({
  isPrev,
  isNext,
  text,
  setPage,
  page,
  onClick,
  className,
  ...props
}: CaterpillarPageItemProps<number>) {
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
  else item = <ButtonSM onClick={onClick}>{text}</ButtonSM>;

  return (
    <div
      className={classNames("flex justify-center my-2", className)}
      {...props}
    >
      {item}
    </div>
  );
}

export default function ArchiveBlockContainer<T>({
  data = [],
  colnum = 4,
  rownum = 5,
  className,
}: {
  data: any;
  colnum?: number;
  rownum?: number;
} & DivProps) {
  const { datetime } = useLocaleService();

  const width = colnum * 56 + 40;
  const height = rownum * 56 + 90;
  const defaultTitle = datetime.year;
  const yearList = getYearList();

  const wpart = 100 / colnum;

  // Monitor year&month state, if year change items else link to page.
  const [linkState, setLinkState] = useState(false);
  const [value, setValue] = useState({
    title: defaultTitle,
    value: null,
    items: yearList,
  });
  const router = useRouter();

  function getYearList(): BlockValueType<number>[] {
    return data.map((yitem) => {
      const ystr = yitem.year.toString();
      return {
        text: ystr.slice(ystr.length - 2, ystr.length),
        value: yitem.year,
        onClick() {
          setLinkState(true);
          setValue((value) => {
            value.title = ystr;
            value.items = getMonthList(yitem.year);
            value.value = yitem.year;
            return value;
          });
        },
      };
    });
  }

  function getMonthList(year: number): BlockValueType<number>[] {
    return distinct(
      findDictFromArray(data, (value) => value.year == year)?.months
    ).map((month) => {
      const mstr = month.toString();
      return {
        text: mstr,
        value: month,
        onClick() {
          router.push(Router.date(year, month));
        },
      };
    });
  }

  return (
    <RadiusContainer className={className}>
      <div
        className={classNames("p-2 pt-4 font-serif flex-1 items-center m-auto")}
        style={width || height ? { width, maxHeight: height } : {}}
      >
        <div>
          <div className="flex mx-2 justify-between">
            <ButtonCenter
              className="w-20 h-10 text-lg mb-3"
              onClick={() => {
                if (linkState) {
                  setLinkState(false);
                  setValue((value) => {
                    value.title = defaultTitle;
                    value.value = null;
                    value.items = yearList;
                    return value;
                  });
                }
              }}
            >
              {value.title}
            </ButtonCenter>
            <ButtonSM>
              <Link href={Router.archive()}>
                <IconChevronRight size="24" />
              </Link>
            </ButtonSM>
          </div>
          <hr />
          <CaterpillarPageItems
            className="mx-1 my-2"
            data={value.items}
            limit={colnum * rownum}
            deps={[value.title]}
            Item={Item}
            itemProps={{
              style: {
                width: wpart + "%",
              },
            }}
          />
        </div>
      </div>
    </RadiusContainer>
  );
}
