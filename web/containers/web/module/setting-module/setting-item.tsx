import SettingSelectMenuItem, {
  SettingSelectMenuItemProps,
} from "./setting-select-item";

export enum SettingItemType {
  SELECT_MENU,
  SWITCH,
  TEXT,
}

export type SettingItemProps = {
  type: SettingItemType;
  props: SettingSelectMenuItemProps;
};

export default function SettingItem({ type, props }: SettingItemProps) {
  switch (type) {
    case SettingItemType.SELECT_MENU:
      return <SettingSelectMenuItem {...props} />;
    default:
      return null;
  }
}
