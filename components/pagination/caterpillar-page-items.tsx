import React, { DependencyList, useEffect, useState } from "react";
import { BlockValueType, DivProps } from "../../components/common/props";
import { updatedDict } from "../../lib/dict";
import { getPageItems, pageBound } from "../../lib/page";
import { classNames } from "../../lib/utils";

/**
 * @Caterpillar
 * The items will flow with S type, a type of pagination items
 * If items size more than view size, the taill will display.
 * if items are more than one view and current is not the first,
 * the head will display.
 */
export type CaterpillarItemType<T> = {
  isNext: boolean;
  isPrev: boolean;
} & BlockValueType<T>;

function getCaterpillarPageItemTypes<T>(
  page: number,
  fsize: number,
  size: number,
  total: number,
  pageItems: BlockValueType<T>[]
) {
  if (pageItems.length == 0) return [];

  const [_, right] = pageBound(page, fsize, size, total);
  const origin: CaterpillarItemType<T> = {
    isNext: false,
    isPrev: false,
    value: null,
    text: null,
    onClick: null,
  };

  const prevItem = updatedDict(origin, (dict) => {
    dict.isPrev = true;
    return dict;
  });

  const afterItem = updatedDict(origin, (dict) => {
    dict.isNext = true;
    return dict;
  });

  const items: CaterpillarItemType<T>[] = pageItems.map(
    (value: BlockValueType<T>) => {
      return updatedDict(origin, (dict) => {
        return { ...dict, ...value };
      });
    }
  );

  if (page > 1) {
    items.unshift(prevItem);
  }

  if (total > right) {
    items.push(afterItem);
  }

  return items;
}

export type CaterpillarPageItemProps<T> = CaterpillarItemType<T> & {
  page: number;
  setPage: (page: number) => void;
} & Omit<DivProps, "children">;

export type CaterpillarPageItem<T> = (
  props: CaterpillarPageItemProps<T>
) => JSX.Element;

type CaterpillarPageItemsProps<T> = {
  data: BlockValueType<T>[];
  limit?: number;
  deps?: DependencyList;
  Item: CaterpillarPageItem<T>;
  itemProps?: Omit<DivProps, "children">;
} & DivProps;

export default function CaterpillarPageItems<T>(
  props: CaterpillarPageItemsProps<T>
) {
  const {
    data = [],
    limit = 10,
    deps = [],
    Item,
    className,
    itemProps,
    ...subprops
  } = props;
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const total = data.length;
  const volume = limit;
  const fsize = volume - 1;
  const size = volume - 2;

  function pageItemDispatch() {
    const pageItems = getPageItems(page, fsize, size, total, data);
    const pageTypeItems = getCaterpillarPageItemTypes(
      page,
      fsize,
      size,
      total,
      pageItems
    );
    const elementItems = pageTypeItems.map((value, index) => (
      <Item
        key={index}
        {...value}
        page={page}
        setPage={setPage}
        {...itemProps}
      />
    ));
    setItems(elementItems);
  }

  useEffect(() => {
    pageItemDispatch();
  }, [page, ...deps]);

  return (
    <div
      className={classNames("flex flex-wrap justify-left", className)}
      {...subprops}
    >
      {items}
    </div>
  );
}
