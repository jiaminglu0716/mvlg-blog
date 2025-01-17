import Link from "next/link";
import RadiusContainer from "../../../../components/container/radius-container";
import IconHomeStroke from "../../../../components/icons/icon-home-stroke";
import IconSearchStroke from "../../../../components/icons/icon-search-stroke";
import { classNames } from "../../../../common/utils";
import { DivProps } from "../../../../components/common/props";
import { Router } from "../../../../common";
import { useSearch } from "../../../../hooks/useSearch";
import { useSetting } from "../../../../hooks/useSetting";

type NoSearchStateNavBarProps = DivProps;

export default function NoSearchStateNavBar(props: NoSearchStateNavBarProps) {
  const { className, ...subprops } = props;
  const { toSearch } = useSearch();
  const { settings } = useSetting();

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
      {settings.searchBar ? (
        <div onClick={toSearch}>
          <IconSearchStroke size="22" />
        </div>
      ) : null}
    </RadiusContainer>
  );
}
