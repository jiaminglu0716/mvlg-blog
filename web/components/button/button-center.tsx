import { classNames } from "../../common/utils";
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
        className
      )}
      {...subprops}
    >
      {children}
    </RadiusContainer>
  );
}
