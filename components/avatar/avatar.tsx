import Image from "next/image";

type AvatarProps = {
  size: number;
  src?: string;
  alt?: string;
};

export default function Avatar({ size, src, alt }: AvatarProps) {
  return (
    <div>
      <Image src={src} alt={alt ?? "Avatar"} width={size} height={size} />
    </div>
  );
}
