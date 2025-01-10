import Image from "next/image";
import RadiusContainer from "../../../../components/container/radius-container";
import Link from "next/link";
import { distanceToNow } from "../../../../common/utils/date";
import IconStarFill from "../../../../components/icons/icon-star-fill";
import { Router } from "../../../../common";
import { link } from "../../../../common/link";
import { dateFormat } from "../../../../../lib/date";
import { PostType } from "../../../../interfaces/api";
import { classNames } from "../../../../common";

export default function PostListItem({ post }: { post: PostType }) {
  return (
    <RadiusContainer className="my-3 bg-white/40 text-slate-800 backdrop-blur-sm">
      <div className="flex items-center p-1 relative h-[8.7rem]">
        <div className="m-2 min-w-40 max-w-40 w-40">
          <Image
            className="rounded-lg"
            src={post.cover ?? link("/desk.jpg")}
            alt={post.title}
            width={200}
            height={200}
          />
        </div>
        <div className="w-auto  text-left p-2 pr-3">
          <div>
            <Link
              href={post.href}
              className="text-lg font-bold leading-6 font-serif line-clamp-1"
            >
              {post.title}
            </Link>
          </div>

          <div className="overflow-hidden max-h-[4.5rem]">
            {post.excerpt && (
              <p
                className={classNames(
                  "mt-1 text-sm",
                  post.tags ? "line-clamp-2" : "line-clamp-3"
                )}
              >
                {post.excerpt}
              </p>
            )}

            {post.tags && (
              <p className="text-md text-sky-500 flex flex-wrap">
                {post.tags.map((tag: string, index: number) => (
                  <Link
                    key={index}
                    className="mr-2 flex items-center"
                    href={Router.tag(tag)}
                  >{`#${tag}`}</Link>
                ))}
              </p>
            )}
          </div>

          <div className="mt-1 flex justify-between text-sm text-gray-600">
            <time>
              {/* {distanceToNow(new Date(post.date))} */}
              {dateFormat(new Date(post.date), "yyyy-MM-dd")}
            </time>
          </div>

          {post.star && (
            <div className="absolute right-3 bottom-3">
              <IconStarFill size="24px" />
            </div>
          )}
        </div>
      </div>
    </RadiusContainer>
  );
}
