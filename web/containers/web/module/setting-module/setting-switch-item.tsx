import RadiusContainer from "../../../../components/container/radius-container";
import IconCircle from "../../../../components/icons/icon-circle";
import IOSSwitch from "../../../../components/switch/ios-switch";
import { DivProps } from "../../../../components/common/props";
import { Dispatch, SetStateAction } from "react";

export type SettingSwitchItemProps = DivProps & {
  title: string;
  state?: [boolean, Dispatch<SetStateAction<boolean>>];
  placeholder?: string;
  onChange: (value: boolean) => void;
};

export default function SettingSwitchItem({
  title,
  state,
  onChange,
}: SettingSwitchItemProps) {
  return (
    <RadiusContainer className="flex justify-left items-center px-2 py-1 h-12 mb-2">
      <div className="mr-0">
        <IconCircle size="25" />
      </div>

      <div className="flex justify-between w-full mx-2 items-center">
        <h2 className="text-lg text-left p-1">{title}</h2>
        <div className="mr-2">
          <IOSSwitch state={state} onSwitch={onChange} />
        </div>
      </div>
    </RadiusContainer>
  );
}
