import Link from "next/link";
import ButtonCenter from "../../../../components/button/button-center";
import { QListTag } from "../../../../services/post/query/QListTag";

export default function TagListItem({ tag }: { tag: QListTag }) {
  return (
    <ButtonCenter className="rounded-full w-auto m-1.5 py-1.5 px-4 ">
      <Link href={tag.link} className="text-center font-serif">
        {tag.title}
      </Link>
    </ButtonCenter>
  );
}
