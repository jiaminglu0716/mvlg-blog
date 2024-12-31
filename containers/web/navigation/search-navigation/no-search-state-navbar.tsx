import Link from "next/link";
import RadiusContainer from "../../../../components/container/radius-container";
import IconHomeStroke from "../../../../components/icons/icon-home-stroke";
import IconSearchStroke from "../../../../components/icons/icon-search-stroke";
import { classNames } from "../../../../lib/utils";
import React, { Dispatch, SetStateAction } from "react";
import { DivProps } from "../../../../components/common/props";
import { Router } from "../../../../config/router-config";

type NoSearchStateNavBarProps = {
  state: [boolean, Dispatch<SetStateAction<boolean>>];
} & DivProps;

export default function NoSearchStateNavBar(props: NoSearchStateNavBarProps) {
  const { state, className, ...subprops } = props;
  const [search, setSearch] = state;

  return (
    <RadiusContainer
      className={classNames(
        "h-14 m-auto flex justify-between items-center md:px-10 sm:px-7 px-5",
        className
      )}
      {...subprops}
    >
      <div>
        <Link href={Router.home()}>
          <IconHomeStroke size="26" />
        </Link>
      </div>
      <div onClick={() => setSearch(true)}>
        <IconSearchStroke size="22" />
      </div>
    </RadiusContainer>
  );
}
