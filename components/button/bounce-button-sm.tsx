import { classNames } from "../../lib/utils";

export default function BounceButtonSM({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg className={classNames("m-auto animate-bounce h-14 w-10", className)}>
      {children}
    </svg>
  );
}
