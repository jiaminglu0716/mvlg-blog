import { createContext, useState } from "react";
import { DivProps } from "../components/common/props";
import { LocalStorage } from "../common/utils/storage";

export const LocaleContext = createContext(null);

export function LocaleContextProvider({ children }: DivProps) {
  const state = useState(LocalStorage.getLocale());

  return (
    <LocaleContext.Provider value={state}>{children}</LocaleContext.Provider>
  );
}
