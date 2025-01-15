import { classNames } from "../../../../common";
import RadiusContainer from "../../../../components/container/radius-container";
import IconCircle from "../../../../components/icons/icon-circle";

export type SettingTextItemProps = {
  title: string;
  value?: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function SettingTextItem({
  title,
  value,
  placeholder,
  onChange,
}: SettingTextItemProps) {
  return (
    <RadiusContainer className="flex justify-left items-center px-2 py-1 h-12 mb-2">
      <div className="mr-0">
        <IconCircle size="25" />
      </div>

      <div className="flex justify-between w-full mx-2">
        <h2 className="text-lg text-left p-1 w-[50%]">{title}</h2>
        <input
          className={classNames("bg-transparent outline-none w-[50%] text-lg")}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </RadiusContainer>
  );
}
