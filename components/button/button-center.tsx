import { classNames, classNameToArray } from "../../lib/utils";
import { DivProps } from "../common/props";
import RadiusContainer from "../container/radius-container";

export default function ButtonCenter(props: DivProps) {
  const { children, className, ...subprops } = props;
  return (
    <RadiusContainer
      className={classNames(
        "flex",
        "justify-center",
        "items-center",
        ...classNameToArray(className)
      )}
      {...subprops}
    >
      {children}
    </RadiusContainer>
  );
}
