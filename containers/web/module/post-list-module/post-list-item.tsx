import Image from "next/image";
import RadiusContainer from "../../../../components/container/radius-container";
import Link from "next/link";
import { QListPost } from "../../../../services/post/query/QListPost";
import distanceToNow from "../../../../lib/dateRelative";
import IconStarFill from "../../../../components/icons/icon-star-fill";
import { Router } from "../../../../config/router-config";

function limit(text: string, limit: number = 20) {
  const len = text.length;
  if (len <= limit) return text;
  else return text.substring(0, limit) + " ...";
}

export default function PostListItem({ post }: { post: QListPost }) {
  return (
    <RadiusContainer className="my-3">
      <div className="flex items-center p-1">
        <div className="w-46 p-2">
          <Image
            className="rounded-lg"
            src={"./desk.jpg"}
            alt="my desk"
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="w-[80%]  text-left p-2">
          <Link href={post.link} className="text-lg leading-6 font-serif">
            {limit(post.title, 53)}
          </Link>
          <p className="mt-1 text-sm">{limit(post.excerpt, 150) ?? "..."}</p>
          {post.tags ? (
            <p className="text-md text-sky-500 flex flex-wrap">
              {post.tags
                .map((tag: string, index: number) => (
                  <Link
                    key={index}
                    className="mr-2"
                    href={Router.tag(tag)}
                  >{`#${limit(tag, 8)}`}</Link>
                ))
                .filter((_, index: number) => {
                  return index < 4;
                })}
              {post.tags.length > 4 ? "....." : null}
            </p>
          ) : null}
          <div className="mt-1 flex justify-between text-sm text-gray-400">
            <time>{distanceToNow(new Date(post.date))}</time>
            <div>
              <IconStarFill size="24px" />
            </div>
          </div>
        </div>
      </div>
    </RadiusContainer>
  );
}
