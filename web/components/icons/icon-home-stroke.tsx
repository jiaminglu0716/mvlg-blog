import SVG from "../common/image/svg";
import { IconProps } from "../common/props";

export default function IconHomeStroke(props: IconProps) {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      viewBox="5 5 30 25"
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      {...props}
    >
      {/* <path d="m6.666666666666666 16 -2.6666666666666665 0 12 -12 12 12 -2.6666666666666665 0"></path>
      <path d="M6.666666666666666 16v9.333333333333332a2.6666666666666665 2.6666666666666665 0 0 0 2.6666666666666665 2.6666666666666665h13.333333333333332a2.6666666666666665 2.6666666666666665 0 0 0 2.6666666666666665 -2.6666666666666665v-9.333333333333332"></path>
      <path d="M12 28v-8a2.6666666666666665 2.6666666666666665 0 0 1 2.6666666666666665 -2.6666666666666665h2.6666666666666665a2.6666666666666665 2.6666666666666665 0 0 1 2.6666666666666665 2.6666666666666665v8"></path> */}
      <path
        d="M10 20 L10 30 L17.5 30 L17.5 23 L22.5 23 L22.5 30 L30 30 L30 20 L20 12 L10 20"
        stroke="none"
      />
      <path d="M8 18 L20 8 L32 18" fill="none" />
      <rect stroke="none" height="8" width="4" y="7" x="25.7" rx="1" />
    </SVG>
  );
}
