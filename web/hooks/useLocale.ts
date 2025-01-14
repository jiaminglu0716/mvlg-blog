import { useContext } from "react";
import { LocaleContext } from "../contexts/localeContext";
import { LocalStorage } from "../common/utils/storage";
import { Services } from "../interfaces/service";

export function useLocale() {
  const [locale, setLocale] = useContext(LocaleContext);

  return {
    locale,
    setLocale(value: Services) {
      if (value != locale) {
        setLocale(value);
        LocalStorage.locale(value);
      }
    },
  };
}
