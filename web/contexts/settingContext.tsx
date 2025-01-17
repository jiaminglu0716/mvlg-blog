import { createContext, useReducer } from "react";
import { DivProps } from "../components/common/props";
import { AppConfig } from "../common";
import { AppSettingsConfig } from "../interfaces/settings";
import { LocalStorage } from "../common/utils/storage";

export const SettingContext = createContext<AppSettingsConfig>(null);

export const SettingDispatchContext = createContext(null);

export function getInitializedSettings() {
  return {
    locale: AppConfig.DEFAULT_APP_LOCALE,
    searchBar: AppConfig.SHOW_SEARCH_BAR,
    searchGapTime: AppConfig.SEARCH_VIEW_GAP_TIME,
    searchCountdown: AppConfig.SEARCH_INPUT_CHANGE_COUNTDOWN_TIME,
  };
}

function getSettingTypes() {
  const types = {};
  const config = getInitializedSettings();
  Object.keys(config).forEach((key: string) => {
    types[key] = typeof config[key];
  });
  return types;
}

function getRealValue(type: string, value: any) {
  if (type == "boolean") {
    return value == "true" || value == true;
  } else if (type == "number") {
    return parseInt(value);
  } else {
    return value;
  }
}

export function updateByCahce(config: AppSettingsConfig) {
  const types = getSettingTypes();
  Object.keys(config).forEach((key: string) => {
    config[key] = getRealValue(types[key], LocalStorage.get(key));
  });
  return config;
}

export function SettingContextProvider({ children }: DivProps) {
  const config = updateByCahce(getInitializedSettings());

  function settingReducer(setting, form) {
    Object.keys(form).forEach((key: string) => {
      const value = form[key];
      LocalStorage.set(key, value);
    });

    return {
      ...setting,
      ...form,
    };
  }

  const [setting, dispatch] = useReducer(settingReducer, config);

  return (
    <SettingContext.Provider value={setting}>
      <SettingDispatchContext.Provider value={dispatch}>
        {children}
      </SettingDispatchContext.Provider>
    </SettingContext.Provider>
  );
}
