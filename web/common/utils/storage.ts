import { Services } from "../../interfaces/service";
import { AppConfig } from "../config";

function isCSR(): boolean {
  return typeof window !== "undefined";
}

export const LocalStorage = {
  /**
   * Base Unit
   */
  set(key: string, value: string) {
    if (isCSR()) {
      localStorage.setItem(key, value);
    }
  },
  get(key: string) {
    if (isCSR()) {
      return localStorage.getItem(key);
    }
  },
  remove(key: string) {
    if (isCSR()) {
      localStorage.removeItem(key);
    }
  },

  /**
   * Locale Unit
   */
  locale(value: Services) {
    LocalStorage.set("locale", value);
  },
  getLocale(): string {
    return LocalStorage.get("locale") ?? AppConfig.DEFAULT_APP_LOCALE;
  },
  resetLocale() {
    LocalStorage.locale(AppConfig.DEFAULT_APP_LOCALE);
  },
};
