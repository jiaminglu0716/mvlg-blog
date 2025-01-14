import RadiusContainer from "../../../../components/container/radius-container";
import useLocaleService from "../../../../hooks/useLocaleService";
import { SettingItemProps } from "./setting-item";
import SettingListContainer from "./setting-list";

export default function SettingContainer({
  items,
}: {
  items: SettingItemProps[];
}) {
  const { setting } = useLocaleService();

  return (
    <div className="font-serif">
      <div className="flex justify-between">
        <RadiusContainer className="mb-5 w-fit py-2 px-5">
          <h2 className="text-left text-slate-900 text-2xl">{setting.title}</h2>
        </RadiusContainer>
        <RadiusContainer className="mb-5 w-fit py-2 px-5">
          <h2 className="text-left text-slate-900 text-xl">{setting.save}</h2>
        </RadiusContainer>
      </div>
      <SettingListContainer items={items} />
    </div>
  );
}
