import { classNames, classNameToArray } from "../../common/utils";
import { DivProps } from "../common/props";

export default function RadiusContainer(props: DivProps) {
  const { children, className, style, ...subprops } = props;
  return (
    <div
      className={classNames(
        "container",
        "max-w-7xl",
        "rounded-xl",
        "overflow-hidden",
        "text-center",
        "shadow",
        "bg-white/40",
        "backdrop-blur-sm",
        ...classNameToArray(className)
      )}
      {...subprops}
    >
      {children}
    </div>
  );
}
