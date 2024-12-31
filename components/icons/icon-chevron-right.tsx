import SVG from "../common/image/svg";
import { IconProps } from "../common/props";

export default function IconChevronRight(props: IconProps) {
  return (
    <SVG
      {...props}
      fill="none"
      viewSize="24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-right"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </SVG>
  );
}
