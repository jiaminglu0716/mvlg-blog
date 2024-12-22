import { CSSProperties } from "react";

type CircleAvatarProps = {
  className?: string;
  style?: CSSProperties;
  size: string;
  src?: string;
  alt?: string;
};

function sizeBox(size) {
  return {
    width: size,
    height: size,
  };
}

export default function CircleAvatar({
  style,
  className,
  size,
  src,
  alt,
}: CircleAvatarProps) {
  return (
    <div className={className} style={{ ...sizeBox(size), ...style }}>
      <img
        className="rounded-full"
        src={src}
        alt={alt ?? "Avatar"}
        style={{ objectFit: "cover", ...sizeBox(size) }}
      />
    </div>
  );
}
