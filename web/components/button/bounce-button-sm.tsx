import { SVGProps } from "react";
import { classNames } from "../../common/utils";

export default function BounceButtonSM(props: SVGProps<SVGSVGElement>) {
  const { className, children, ...subprops } = props;
  return (
    <svg
      className={classNames("m-auto animate-bounce h-14 w-10", className)}
      {...subprops}
    >
      {children}
    </svg>
  );
}
