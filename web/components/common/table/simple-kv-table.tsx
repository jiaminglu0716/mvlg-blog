import RadiusContainer from "../../container/radius-container";
import { DivProps } from "../props";
import { classNames } from "../../../common/utils/index";

export default function SimpleKVTable({
  keys,
  values,
  joinSign = " / ",
  className,
  ...props
}: DivProps & {
  keys: string[];
  values: any;
  joinSign?: string;
}) {
  const rowsize = keys.length;
  const items = [];
  for (let i = 0; i < rowsize; i++) {
    const key = keys[i];
    const ovalue = values[i];
    const value = Array.isArray(ovalue) ? ovalue.join(joinSign) : ovalue;
    items.push(
      <div key={key} className="text-left px-4 py-1 flex justify-between">
        <label className="font-bold mr-2">
          {key.substring(0, 1).toUpperCase() + key.substring(1)}
        </label>
        <span className="w-[75%] text-left">{value}</span>
      </div>
    );
  }
  return (
    <RadiusContainer className={classNames("py-2", className)} {...props}>
      {...items}
    </RadiusContainer>
  );
}
