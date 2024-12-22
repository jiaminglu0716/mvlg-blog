import Link from "next/link";
import { classNames } from "../../../../lib/utils";

export default function TimelineBlock({
  month,
  day,
  data,
  className,
}: {
  className?: string;
  month: number;
  day: number;
  data: {
    title: string;
    link: string;
  }[];
}) {
  return (
    <div className={classNames("flex-1", className)}>
      <div className="">
        <div className="flex items-center">
          <div className="w-4 h-4 border border-black rounded-full m-1"></div>
          <div className="ml-2">
            <span className="text-lg font-bold font-serif">
              {month}-{day}
            </span>
          </div>
        </div>
      </div>
      <div className="border-l border-black px-5 ml-3 -mt-1.5">
        <div className="text-left ">
          {data.map((post, index: number) => {
            return (
              <p key={index} className="sm:ml-12 p-1.5 font-serif">
                <Link href={post.link}>{post.title}</Link>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
