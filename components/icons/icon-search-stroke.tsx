import SVG from "../common/image/svg";
import { IconProps } from "../common/props";

export default function IconSearchStroke(props: IconProps) {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewSize="30"
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4"
      {...props}
    >
      <path d="M4 13.333333333333332a9.333333333333332 9.333333333333332 0 1 0 18.666666666666664 0 9.333333333333332 9.333333333333332 0 1 0 -18.666666666666664 0"></path>
      <path d="m28 28 -8 -8"></path>
    </SVG>
  );
}
