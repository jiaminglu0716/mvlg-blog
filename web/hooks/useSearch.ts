import { useContext } from "react";
import { SearchDispatchContext } from "../contexts/searchContext";

export function useSearch() {
  const setSearch = useContext(SearchDispatchContext);

  function toSearch() {
    setSearch(true);
  }

  function toNavBar() {
    setTimeout(() => setSearch(false), 300);
  }

  return {
    toSearch,
    toNavBar,
  };
}
