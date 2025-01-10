import SVG from "../common/image/svg";
import { IconProps } from "../common/props";

export default function IconSNSTelegramStroke(props: IconProps) {
  return (
    <SVG viewSize="24" stroke="currentColor" fill="none" {...props}>
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
    </SVG>
  );
}
