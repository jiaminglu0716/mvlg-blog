import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

type CircleAvatarProps = {
  size: string;
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

function sizeBox(size) {
  return {
    width: size,
    height: size,
  };
}

export default function CircleAvatar(props: CircleAvatarProps) {
  const { style, size, src, alt, ...subprops } = props;
  return (
    <div style={{ ...sizeBox(size), ...style }} {...subprops}>
      <img
        className="rounded-full"
        src={src}
        alt={alt ?? "Avatar"}
        style={{ objectFit: "cover", ...sizeBox(size) }}
      />
    </div>
  );
}
