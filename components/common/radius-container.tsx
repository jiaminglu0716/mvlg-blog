import { classNames, classNameToArray } from "../../lib/utils";
import { ClickEvent } from "./types";

type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
  style?: { [key: string]: any };
  onClick?: ClickEvent;
};

export default function RadiusContainer({
  children,
  className,
  style,
  onClick,
  ...props
}: ContainerProps) {
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
      style={style}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}
