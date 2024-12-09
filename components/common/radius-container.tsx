import { classNames, classNameToArray } from "../../lib/utils";

type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function RadiusContainer({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={classNames(
        "container",
        "max-w-7xl",
        "m-auto",
        "px-4",
        "rounded-xl",
        ...classNameToArray(className)
      )}
    >
      {children}
    </div>
  );
}
