import SVG from "../common/image/svg";
import { IconProps } from "../common/props";

export default function IconShare(props: IconProps) {
  return (
    <SVG
      fill="none"
      viewSize="24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-share"
      {...props}
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
      <polyline points="16 6 12 2 8 6"></polyline>
      <line x1="12" y1="2" x2="12" y2="15"></line>
    </SVG>
  );
}
