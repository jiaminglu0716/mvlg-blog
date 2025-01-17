import ViewContainer from "../../components/container/view-container";
import SettingContainer from "../../containers/web/module/setting-module";
import { SettingItemProps } from "../../containers/web/module/setting-module/setting-item";

export default function SettingsView({
  items,
  onInit,
  onSubmit,
}: {
  items: SettingItemProps[];
  onInit?: React.MouseEventHandler<Element>;
  onSubmit?: React.MouseEventHandler<Element>;
}) {
  return (
    <ViewContainer>
      <SettingContainer items={items} onInit={onInit} onSubmit={onSubmit} />
    </ViewContainer>
  );
}
