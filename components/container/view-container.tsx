import { classNames } from "../../lib/utils";
import { DivProps } from "../common/props";
import RadiusContainer from "./radius-container";

export default function ViewContainer(props: DivProps) {
  const { children, className, ...subprops } = props;

  return (
    <RadiusContainer
      className={classNames("max-w-3xl sm:px-5 py-2", className)}
      {...subprops}
    >
      {children}
    </RadiusContainer>
  );
}
