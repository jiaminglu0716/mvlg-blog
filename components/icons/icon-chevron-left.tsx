import SVG from "../common/image/svg";
import { IconBlockProps } from "../common/props";

export default function IconChevronLeft(props: IconBlockProps) {
  return (
    <SVG
      fill="none"
      viewSize="24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-left"
      {...props}
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </SVG>
  );
}
