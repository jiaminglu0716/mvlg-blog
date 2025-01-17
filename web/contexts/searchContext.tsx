import { DivProps } from "../components/common/props";
import { createContext, useState } from "react";

export const SearchContext = createContext(null);
export const SearchDispatchContext = createContext(null);

export function SearchContextProvider({ children }: DivProps) {
  const [search, setSearch] = useState(false);

  return (
    <SearchContext.Provider value={search}>
      <SearchDispatchContext.Provider value={setSearch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchContext.Provider>
  );
}
