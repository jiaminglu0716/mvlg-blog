import Image from "next/image";
import { classNames, classNameToArray } from "../../../lib/utils";

type MaskImageProps = {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  className?: string;
  position?: string;
  mode?: any;
  color?: string;
  opacity?: string;
  blur?: string;
};

export default function MaskImage({
  src,
  className,
  alt = "",
  width,
  height,
  mode = "cover",
  color,
  opacity,
  position = "fixed",
  blur,
}: MaskImageProps) {
  const wcss = width ?? "w-full";
  const hcss = height ?? "h-full";

  return (
    <div
      className={classNames(
        position,
        "overflow-hidden",
        wcss,
        hcss,
        ...classNameToArray(className)
      )}
    >
      <div
        className={classNames(
          wcss,
          hcss,
          blur ?? "blur-md",
          color ?? "bg-white",
          opacity ?? "opacity-75",
          "invert sepia-0",
          "absolute"
        )}
      ></div>

      <Image
        className="absolute"
        src={src}
        alt={alt}
        fill={true}
        style={{ objectFit: mode, zIndex: -2 }}
      />
    </div>
  );
}
