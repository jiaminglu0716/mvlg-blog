import Link from "next/link";
import RadiusContainer from "../../../../components/container/radius-container";
import IconStarFill from "../../../../components/icons/icon-star-fill";
import { QListPost } from "../../../../services/post/query/QListPost";
import { DivProps } from "../../../../components/common/props";
import { classNames } from "../../../../lib/utils";
import { QListTag } from "../../../../services/post/query/QListTag";

type SearchInformationProps = {
  tags: QListTag[];
  posts: QListPost[];
} & DivProps;

export default function SearchInformation(props: SearchInformationProps) {
  const { tags, posts, className, ...subprops } = props;

  return (
    <div className={classNames("m-auto max-w-7xl", className)} {...subprops}>
      <div className="flex justify-between font-serif ">
        <RadiusContainer className="w-80 p-3">
          <div className="flex flex-wrap">
            {tags && tags.length > 0 ? (
              tags.map((tag: QListTag, index: number) => {
                return (
                  <div key={index} className="text-left mx-1 p-1 my-1 text-sm">
                    <Link
                      href={tag.link}
                      dangerouslySetInnerHTML={{ __html: tag.title }}
                    />
                  </div>
                );
              })
            ) : (
              <p className="w-full text-center">No tags yet </p>
            )}
          </div>
        </RadiusContainer>
        <RadiusContainer className="ml-4 p-3">
          {posts && posts.length > 0 ? (
            posts.map((post: QListPost, index: number) => {
              return (
                <RadiusContainer key={index} className="flex my-2 p-2">
                  <div className="w-8 h-8 flex justify-center items-center mx-1">
                    <IconStarFill size="20" />
                  </div>
                  <div className="text-left text-md p-1 ">
                    <Link
                      href={post.link}
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                  </div>
                </RadiusContainer>
              );
            })
          ) : (
            <p className="w-full text-center">No posts yet </p>
          )}
        </RadiusContainer>
      </div>
    </div>
  );
}
