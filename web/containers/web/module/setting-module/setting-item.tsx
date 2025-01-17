import SettingSelectMenuItem from "./setting-select-item";
import SettingSwitchItem from "./setting-switch-item";
import SettingTextItem from "./setting-text-item";

export enum SettingItemType {
  SELECT_MENU,
  SWITCH,
  TEXT,
}

export type SettingItemPropsType = any;

export type SettingItemProps = {
  value: string;
  type: SettingItemType;
  props: SettingItemPropsType;
};

export default function SettingItem({ type, props }: SettingItemProps) {
  switch (type) {
    case SettingItemType.SELECT_MENU:
      return <SettingSelectMenuItem {...props} />;
    case SettingItemType.TEXT:
      return <SettingTextItem {...props} />;
    case SettingItemType.SWITCH:
      return <SettingSwitchItem {...props} />;
    default:
      return null;
  }
}
