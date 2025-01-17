import { Services } from "../../interfaces/service";

export class AppConfig {
  public static readonly SHOW_SEARCH_BAR: boolean = true;

  public static readonly SEARCH_VIEW_GAP_TIME: number = 700;

  public static readonly SEARCH_INPUT_CHANGE_COUNTDOWN_TIME: number = 700;

  public static readonly DEFAULT_APP_LOCALE: Services = "en";
}
