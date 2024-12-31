import SVG from "../common/image/svg";
import { IconProps } from "../common/props";

export default function IconCircle(props: IconProps) {
  return (
    <SVG
      fill="none"
      viewSize="24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-circle"
      {...props}
    >
      <circle cx="12" cy="12" r="7" />
    </SVG>
  );
}
