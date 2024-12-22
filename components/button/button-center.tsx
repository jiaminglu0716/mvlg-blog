import { classNames, classNameToArray } from "../../lib/utils";
import RadiusContainer from "../common/radius-container";
import { ClickEvent } from "../common/types";

export default function ButtonCenter({
  children,
  className,
  style,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  style?: { [key: string]: any };
  onClick?: ClickEvent;
}) {
  return (
    <RadiusContainer
      className={classNames(
        "flex",
        "justify-center",
        "items-center",
        ...classNameToArray(className)
      )}
      style={style}
      onClick={onClick}
    >
      {children}
    </RadiusContainer>
  );
}
