import Image from "next/image";

type AvatarProps = {
  size: number;
  src: string;
};

export default function Avatar({ size, src }: AvatarProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
    >
      <Image src={src} alt="" width={size} height={size} />
    </div>
  );
}
