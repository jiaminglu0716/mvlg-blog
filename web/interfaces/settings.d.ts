export type AppSettingsConfig = {
  locale: Services;
  searchBar: boolean;
  searchGapTime: number;
  searchCountdown: number;
};

export type AppSettingConfigTypes = {
  [property in keyof AppSettingsConfig]: "string" | "number" | "boolean";
};

export type AppSettingKeys = keyof AppSettingsConfig;
