import SVG from "../common/image/svg";
import { IconBlockProps } from "../common/props";

export default function IconChevronDown(props: IconBlockProps) {
  return (
    <SVG
      {...props}
      fill="none"
      viewSize="24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-down"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </SVG>
  );
}
