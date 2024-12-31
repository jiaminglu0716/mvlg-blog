import { classNames, classNameToArray } from "../../lib/utils";
import { DivProps } from "../common/props";

export default function RadiusContainer(props: DivProps) {
  const { children, className, ...subprops } = props;
  return (
    <div
      className={classNames(
        "container",
        "max-w-7xl",
        "rounded-xl",
        "overflow-hidden",
        "text-center",
        "bg-white",
        "shadow",
        ...classNameToArray(className)
      )}
      {...subprops}
    >
      {children}
    </div>
  );
}
