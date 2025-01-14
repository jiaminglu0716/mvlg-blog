import { useRouter } from "next/router";
import PrevButtonSM from "../../../../components/button/prev-button-sm";
import RadiusContainer from "../../../../components/container/radius-container";
import Link from "next/link";
import {
  distanceToNow,
  classNames,
  pixel,
  markdownToHtml,
} from "../../../../common";
import IconStar from "../../../../components/icons/icon-star";
import IconShare from "../../../../components/icons/icon-share";
import { useEffect, useState } from "react";
import { Router } from "../../../../common";
import { dateFormat } from "../../../../../lib/date";
import { PostType, TagType } from "../../../../interfaces/api";
import IconStarFill from "../../../../components/icons/icon-star-fill";

export default function PostModule({ post }: { post: PostType }) {
  const router = useRouter();

  const sideLinkIconSize = 24;

  const sideBar = [
    {
      icon: post.star ? (
        <IconStarFill stroke="#000000" size={pixel(sideLinkIconSize)} />
      ) : (
        <IconStar size={pixel(sideLinkIconSize)} />
      ),
      onClick() {},
    },
    {
      icon: <IconShare size={pixel(sideLinkIconSize)} />,
      onClick() {
        const link = window.location.href;
        navigator.clipboard.writeText(link);
      },
    },
  ];

  const sideBarHeight = sideBar.length * (sideLinkIconSize + 16);

  const [content, setContent] = useState("");

  useEffect(() => {
    markdownToHtml(post.content).then(setContent);
  }, []);

  return (
    <div className="flex justify-left mb-3 min-h-[70vh]">
      <div>
        <div className="flex-1 mr-2">
          <PrevButtonSM className="m-2 mt-0" onClick={router.back} />
          <RadiusContainer
            className={classNames(
              "w-10 m-2 pt-1 pb-1",
              `h-[${sideBarHeight}px]`
            )}
          >
            {sideBar.map((link, index) => (
              <div
                key={index}
                className="flex justify-center m-2.5"
                onClick={link.onClick}
              >
                {link.icon}
              </div>
            ))}
          </RadiusContainer>
        </div>
      </div>
      <div className="mx-2 w-full">
        <RadiusContainer className="max-w-3xl m-auto">
          <div className="px-7 py-5 my-2 text-left m-auto">
            <h1 className="text-xl font-bold font-serif">{post.title}</h1>
            {post.excerpt && <p className="mt-2 text-md">{post.excerpt}</p>}
            {post.tags && (
              <p className="mt-1 text-md text-sky-500 flex flex-wrap">
                {post.tags.map((tag: TagType, index: number) => (
                  <Link
                    key={index}
                    className="mr-2"
                    href={tag.href}
                  >{`#${tag.title}`}</Link>
                ))}
              </p>
            )}
            <time className="flex mt-2 text-gray-700">
              {/* {distanceToNow(new Date(post.date))} */}
              {dateFormat(new Date(post.date))}
            </time>
            {post.cover && (
              <div className="m-auto p-5 max-w-[40rem]">
                <img src={post.cover} />
              </div>
            )}
          </div>
          {/* <hr className="w-[95%] m-auto" /> */}
          <article className="m-2 p-3 px-5 pb-7">
            <div
              // id="markdown"
              className="my-2 m-auto px-5 text-justify markdown-body"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </article>
        </RadiusContainer>
      </div>
    </div>
  );
}
