import { diffExecDict } from "../../../lib/dict";
import { Services } from "../../interfaces/service";
import { LocalStorage } from "../utils/storage";
import { AppConfig } from "./app-config";

export type AppSettingsConfig = {
  locale: Services;
  searchGapTime: number | null;
  searchCountdown: number | null;
};

export class AppSettings {
  private _config: AppSettingsConfig;

  public constructor() {
    this._config = {
      locale: this.getLocale(),
      searchGapTime: AppConfig.SEARCH_VIEW_GAP_TIME,
      searchCountdown: AppConfig.SEARCH_INPUT_CHANGE_COUNTDOWN_TIME,
    };

    Object.keys(this._config).forEach((key: string) => {
      const value = LocalStorage.get(key);

      if (value && value != null) {
        this._config[key] = value;
      }
    });
  }

  public locale(locale: Services) {
    LocalStorage.locale(locale);
  }

  public getLocale(): Services {
    return LocalStorage.getLocale();
  }

  public setAll(
    config: AppSettingsConfig,
    diffexec?: (key, d1, d2) => void
  ): this {
    diffExecDict(this._config, config, (key, d1, d2) => {
      LocalStorage.set(key, d2[key]);
      diffexec(key, d1, d2);
    });
    this._config = config;
    return this;
  }

  public settings(): AppSettingsConfig {
    return this._config;
  }
}
