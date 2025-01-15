import { useRouter } from "next/router";
import PrevButtonSM from "../../../../components/button/prev-button-sm";
import RadiusContainer from "../../../../components/container/radius-container";
import useLocaleService from "../../../../hooks/useLocaleService";
import { SettingItemProps } from "./setting-item";
import SettingListContainer from "./setting-list";
import React from "react";
import ButtonCenter from "../../../../components/button/button-center";

export default function SettingContainer({
  items,
  onSubmit,
}: {
  items: SettingItemProps[];
  onSubmit?: React.MouseEventHandler<Element>;
}) {
  const router = useRouter();
  const { setting } = useLocaleService();

  return (
    <div className="font-serif">
      <div className="flex justify-between mb-5">
        <div className="flex items-center">
          <PrevButtonSM className="m-2 ml-0" onClick={router.back} />
          <RadiusContainer className="w-fit py-2 px-5 h-10">
            <h2 className="text-left text-slate-900 text-md">
              {setting.title}
            </h2>
          </RadiusContainer>
        </div>
        <div className="flex items-center">
          <ButtonCenter className="w-fit py-2 px-5 h-10" onClick={onSubmit}>
            <h2 className="text-left text-slate-900 text-md">{setting.save}</h2>
          </ButtonCenter>
        </div>
      </div>
      <SettingListContainer items={items} />
    </div>
  );
}
