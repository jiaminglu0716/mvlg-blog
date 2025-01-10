import { classNames, classNameToArray } from "../../common/utils";
import { DivProps } from "../common/props";

export default function Container(props: DivProps) {
  const { children, className, ...subprops } = props;
  return (
    <div
      className={classNames(
        "container",
        "max-w-7xl",
        "m-auto",
        "px-4",
        ...classNameToArray(className)
      )}
      {...subprops}
    >
      {children}
    </div>
  );
}
