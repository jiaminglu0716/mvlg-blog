import { Dispatch, SetStateAction, useState } from "react";
import { classNames } from "../../../../common";
import { DivProps } from "../../../../components/common/props";
import RadiusContainer from "../../../../components/container/radius-container";
import IconCircle from "../../../../components/icons/icon-circle";

export type SettingTextItemProps = DivProps & {
  title: string;
  state?: [string, Dispatch<SetStateAction<string>>];
  placeholder?: string;
  onChange: (value: any) => void;
};

export default function SettingTextItem({
  title,
  state,
  placeholder,
  onChange,
}: SettingTextItemProps) {
  const [dvalue, setValue] = state;

  function onInputChange(ev: React.ChangeEvent<HTMLInputElement>) {
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
        <h2 className="text-lg text-left p-1 w-fit">{title}</h2>
        <input
          className={classNames(
            "min-w-10 max-w-32 bg-transparent outline-none text-lg text-right pr-2"
          )}
          value={dvalue}
          placeholder={placeholder}
          onChange={onInputChange}
        />
      </div>
    </RadiusContainer>
  );
}
