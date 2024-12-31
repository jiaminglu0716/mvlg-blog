import { useRouter } from "next/router";
import PrevButtonSM from "../../../../components/button/prev-button-sm";
import RadiusContainer from "../../../../components/container/radius-container";
import { QListPost } from "../../../../services/post/query/QListPost";
import { classNames, pixel } from "../../../../lib/utils";
import Link from "next/link";
import distanceToNow from "../../../../lib/dateRelative";
import IconStar from "../../../../components/icons/icon-star";
import IconShare from "../../../../components/icons/icon-share";

export default function PostModule({ post }: { post: QListPost }) {
  const router = useRouter();

  const sideLinkIconSize = 18;

  const sideLinks = [
    {
      link: "/",
      icon: <IconStar size={pixel(sideLinkIconSize)} />,
    },
    {
      link: "/",
      icon: <IconShare size={pixel(sideLinkIconSize)} />,
    },
  ];

  const sideLinksHeight = sideLinks.length * (sideLinkIconSize + 16);

  return (
    <div className="flex justify-left mb-3 min-h-[70vh]">
      <div>
        <div className="flex-1 mr-2">
          <PrevButtonSM className="m-2" onClick={router.back} />
          <RadiusContainer
            className={classNames(
              "w-10 m-2 pt-1 pb-1",
              `h-[${sideLinksHeight}px]`
            )}
          >
            {sideLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="flex justify-center m-2.5"
              >
                {link.icon}
              </Link>
            ))}
          </RadiusContainer>
        </div>
      </div>
      <div className="mx-2 w-full">
        <div className="max-w-3xl m-auto">
          <div className="p-5 mb-2 text-left m-auto">
            <h1 className="text-xl font-bold font-serif">{post.title}</h1>
            {post.excerpt ? (
              <p className="mt-2 text-md">{post.excerpt}</p>
            ) : null}
            {post.tags ? (
              <p className="mt-1 text-md text-sky-500 flex flex-wrap">
                {post.tags.map((tag: string, index: number) => (
                  <Link
                    key={index}
                    className="mr-2"
                    href={`/tag/${tag}`}
                  >{`#${tag}`}</Link>
                ))}
              </p>
            ) : null}
            <time className="flex mt-2 text-gray-400">
              {distanceToNow(new Date(post.date))}
            </time>
          </div>
          <hr />
          <article className="m-2 p-3">
            <div
              className="my-5 m-auto text-justify"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </div>
    </div>
  );
}
