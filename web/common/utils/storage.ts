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
   * Extended Unit
   */
  getStr(key: string, defaultValue: string = ""): string {
    const value = LocalStorage.get(key);
    return value == null || !value ? defaultValue : LocalStorage.get(key);
  },

  getInt(key: string, defaultValue: number = 0): number {
    const value = LocalStorage.get(key);
    return value == null || !value
      ? defaultValue
      : parseInt(LocalStorage.get(key));
  },

  /**
   * Locale Unit
   */
  locale(value: Services) {
    LocalStorage.set("locale", value);
  },
  getLocale(): Services {
    return (LocalStorage.get("locale") ??
      AppConfig.DEFAULT_APP_LOCALE) as Services;
  },
  resetLocale() {
    LocalStorage.locale(AppConfig.DEFAULT_APP_LOCALE);
  },
};
