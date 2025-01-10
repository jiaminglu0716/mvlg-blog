import { DivProps } from "../components/common/props";
import { createContext, useReducer, useState } from "react";

export const SearchContext = createContext(null);
export const SearchDispatchContext = createContext(null);

export function SearchContextProvider({ children }: DivProps) {
  const value = { search: false };

  function searchReducer(_, state: boolean) {
    return {
      search: state,
    };
  }

  const [search, dispatch] = useReducer(searchReducer, value);

  return (
    <SearchContext.Provider value={search}>
      <SearchDispatchContext.Provider value={dispatch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
}
