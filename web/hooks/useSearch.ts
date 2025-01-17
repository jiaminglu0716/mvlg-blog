import { useContext } from "react";
import {
  SearchContext,
  SearchDispatchContext,
} from "../contexts/searchContext";

export function useSearch() {
  const search = useContext(SearchContext);
  const setSearch = useContext(SearchDispatchContext);

  function toSearch() {
    setSearch(true);
  }

  function toNavBar() {
    setTimeout(() => setSearch(false), 300);
  }

  return {
    search,
    toSearch,
    toNavBar,
  };
}
