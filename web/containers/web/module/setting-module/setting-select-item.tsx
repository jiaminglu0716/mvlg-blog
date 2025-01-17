import { Dispatch, SetStateAction, useState } from "react";
import { classNames } from "../../../../common";
import { DivProps } from "../../../../components/common/props";
import RadiusContainer from "../../../../components/container/radius-container";
import IconCircle from "../../../../components/icons/icon-circle";

export type SettingSelectMenuItemProps = DivProps & {
  title: string;
  state?: [string, Dispatch<SetStateAction<string>>];
  options: { text: string; value: string }[];
  onChange: (value: any) => void;
};

export default function SettingSelectMenuItem({
  title,
  state,
  options,
  onChange,
}: SettingSelectMenuItemProps) {
  const [dvalue, setValue] = state;

  function onSelectChange(ev: React.ChangeEvent<HTMLSelectElement>) {
    const target = ev.target.value;
    setValue(target);
    onChange(target);
  }

  return (
    <RadiusContainer className="flex justify-left items-center px-2 py-1 h-12 mb-2">
      <div className="mr-0">
        <IconCircle size="25" />
      </div>

      <div className="flex justify-between w-full mx-2">
        <h2 className="text-lg text-left p-1">{title}</h2>
        <select
          className={classNames(
            "bg-transparent outline-none text-lg text-right pr-2"
          )}
          value={dvalue}
          onChange={onSelectChange}
        >
          {options.map((option, optid: number) => {
            return (
              <option
                key={optid}
                className="text-md text-center"
                style={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
                value={option.value}
              >
                {option.text}
              </option>
            );
          })}
        </select>
      </div>
    </RadiusContainer>
  );
}
