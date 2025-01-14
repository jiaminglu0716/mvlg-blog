import ViewContainer from "../../components/container/view-container";
import SettingContainer from "../../containers/web/module/setting-module";
import { SettingItemProps } from "../../containers/web/module/setting-module/setting-item";

export default function SettingsView({ items }: { items: SettingItemProps[] }) {
  return (
    <ViewContainer>
      <SettingContainer items={items} />
    </ViewContainer>
  );
}
