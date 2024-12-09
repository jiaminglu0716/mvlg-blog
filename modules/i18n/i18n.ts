import { cacheKeys, i18nCache, type Locale } from "./config";
import en from "./locales/en";
import zh from "./locales/zh";
import ja from "./locales/ja";

export const i18ns = {
  en: () => en,
  zh: () => zh,
  ja: () => ja,
};

export const i18n = {
  en,
  zh,
  ja,
};

export const useI18n = (locale: Locale) => i18ns[locale]?.() ?? i18ns.en();

export function currentLocale() {
  return i18nCache.get(cacheKeys.default);
}

export function getLocales() {
  return i18nCache.get(cacheKeys.allow);
}

export function switchLocale(locale: string): boolean {
  const locales: string[] = getLocales();
  if (locales.includes(locale)) {
    i18nCache.set(cacheKeys.default, locale);
    return true;
  }
  return false;
}
