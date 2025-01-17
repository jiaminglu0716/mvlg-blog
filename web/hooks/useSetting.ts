import { useContext } from "react";
import {
  SettingContext,
  SettingDispatchContext,
} from "../contexts/settingContext";

export function useSetting() {
  const settings = useContext(SettingContext);
  const setSettings = useContext(SettingDispatchContext);

  return {
    settings,
    setSettings,
  };
}
