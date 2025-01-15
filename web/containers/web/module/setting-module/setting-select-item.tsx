import { classNames } from "../../../../common";
import RadiusContainer from "../../../../components/container/radius-container";
import IconCircle from "../../../../components/icons/icon-circle";

export type SettingSelectMenuItemProps = {
  title: string;
  value?: string;
  options: { text: string; value: string }[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export default function SettingSelectMenuItem({
  title,
  value,
  options,
  onChange,
}: SettingSelectMenuItemProps) {
  return (
    <RadiusContainer className="flex justify-left items-center px-2 py-1 h-12 mb-2">
      <div className="mr-0">
        <IconCircle size="25" />
      </div>

      <div className="flex justify-between w-full mx-2">
        <h2 className="text-lg text-left p-1 w-[50%]">{title}</h2>
        <select
          className={classNames("bg-transparent outline-none w-[50%] text-lg")}
          value={value}
          onChange={onChange}
        >
          {options.map((option, optid: number) => {
            return (
              <option
                key={optid}
                className="text-md"
                style={{
                  backgroundColor: "rgba(0,0,0, 0.5)",
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
