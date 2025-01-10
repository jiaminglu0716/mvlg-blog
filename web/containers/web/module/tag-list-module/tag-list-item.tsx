import Link from "next/link";
import ButtonCenter from "../../../../components/button/button-center";
import { TagType } from "../../../../interfaces/api";

export default function TagListItem({ tag }: { tag: TagType }) {
  return (
    <ButtonCenter className="rounded-full w-auto m-1.5 py-1.5 px-4 ">
      <Link href={tag.href} className="text-center font-serif">
        {tag.title}
      </Link>
    </ButtonCenter>
  );
}
