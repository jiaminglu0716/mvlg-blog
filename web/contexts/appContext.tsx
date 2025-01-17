import { DivProps } from "../components/common/props";
import { LocaleContextProvider } from "./localeContext";
import { SearchContextProvider } from "./searchContext";
import { ServiceContextProvider } from "./serviceContext";
import { SettingContextProvider } from "./settingContext";

export function AppContextProvider({ children }: DivProps) {
  return (
    <SettingContextProvider>
      <LocaleContextProvider>
        <ServiceContextProvider>
          <SearchContextProvider>{children}</SearchContextProvider>
        </ServiceContextProvider>
      </LocaleContextProvider>
    </SettingContextProvider>
  );
}
