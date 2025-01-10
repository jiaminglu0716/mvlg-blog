import { NextConfig } from "next";
import { Cache } from "../../lib/cache";

export const i18n = {
  defaultLocale: "zh",
  locales: ["en", "zh", "ja"],
};

export const cacheKeys = {
  default: "i18n_default_key",
  allow: "i18n_allow_key",
};

export const i18nCache = new Cache()
  .set(cacheKeys.default, i18n.defaultLocale)
  .set(cacheKeys.allow, i18n.locales);

export const nextConfig: NextConfig = {
  i18n,
};

export type Locale = (typeof i18n)["locales"][number];
