import SVG from "../common/image/svg";
import { IconBlockProps } from "../common/props";

export default function IconVerticalLine(props: IconBlockProps) {
  const height = props.height ?? 24;
  return (
    <SVG
      fill="none"
      viewSize="48"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-circle"
      viewBox={`0 0 24 ${height}`}
      {...props}
    >
      <line x1="12" y1="0" x2="12" y2={height} />
    </SVG>
  );
}
