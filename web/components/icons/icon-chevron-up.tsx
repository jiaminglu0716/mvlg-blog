import SVG from "../common/image/svg";
import { IconProps } from "../common/props";

export default function IconChevronUp(props: IconProps) {
  return (
    <SVG
      {...props}
      fill="none"
      viewSize="24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-up"
    >
      <polyline points="18 15 12 9 6 15"></polyline>
    </SVG>
  );
}
