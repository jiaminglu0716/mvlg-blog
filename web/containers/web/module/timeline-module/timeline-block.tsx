import Link from "next/link";
import { classNames } from "../../../../common/utils";
import { PostType } from "../../../../interfaces/api";

export default function TimelineBlock({
  month,
  day,
  data,
  className,
}: {
  className?: string;
  month: number;
  day: number;
  data: PostType[];
}) {
  return (
    <div className={classNames("flex-1", className)}>
      <div className="">
        <div className="flex items-center">
          <div className="w-4 h-4 border border-slate-800 rounded-full m-1"></div>
          <div className="ml-2">
            <span className="text-lg font-bold font-serif">
              {month}-{day}
            </span>
          </div>
        </div>
      </div>
      <div className="border-l border-slate-800 px-5 ml-3 -mt-1.5">
        <div className="text-left ">
          {data.map((post: PostType, index: number) => {
            return (
              <p key={index} className="sm:ml-12 p-1.5 font-serif">
                <Link href={post.href}>{post.title}</Link>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
