import SVG from "../common/image/svg";
import { IconProps } from "../common/props";

export default function IconStarFill(props: IconProps) {
  return (
    <SVG
      fill="yellow"
      viewSize="24"
      className="feather feather-star"
      stroke="none"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </SVG>
  );
}
