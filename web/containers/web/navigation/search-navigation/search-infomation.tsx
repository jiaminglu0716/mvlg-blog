import Link from "next/link";
import RadiusContainer from "../../../../components/container/radius-container";
import IconStarFill from "../../../../components/icons/icon-star-fill";
import { DivProps } from "../../../../components/common/props";
import { classNames } from "../../../../common/utils";
import { useSearch } from "../../../../hooks/useSearch";
import { PostType, TagType } from "../../../../interfaces/api";

type SearchInformationProps = {
  tags: TagType[];
  posts: PostType[];
} & DivProps;

export default function SearchInformation(props: SearchInformationProps) {
  const { tags, posts, className, ...subprops } = props;
  const { toNavBar } = useSearch();

  return (
    <div className={classNames("m-auto max-w-7xl", className)} {...subprops}>
      <div className="flex justify-between font-serif ">
        <RadiusContainer className="w-80 p-3">
          <div className="flex flex-wrap">
            {tags && tags.length > 0 ? (
              tags.map((tag: TagType, index: number) => {
                return (
                  <div key={index} className="text-left mx-1 p-1 my-1 text-sm">
                    <Link
                      href={tag.href}
                      dangerouslySetInnerHTML={{ __html: tag.title }}
                      onClick={toNavBar}
                    />
                  </div>
                );
              })
            ) : (
              <p className="w-full text-center">No tags yet </p>
            )}
          </div>
        </RadiusContainer>

        {posts && posts.length > 0 ? (
          <RadiusContainer className="ml-4 p-0 m-0 bg-white/[0] backdrop-blur-none shadow-none">
            {posts.map((post: PostType, index: number) => {
              return (
                <RadiusContainer key={index} className="flex my-2 p-2">
                  <div className="w-8 h-8 flex justify-center items-center mx-1">
                    <IconStarFill size="20" />
                  </div>
                  <div className="text-left text-md p-1 ">
                    <Link
                      href={post.href}
                      dangerouslySetInnerHTML={{ __html: post.title }}
                      onClick={toNavBar}
                    />
                  </div>
                </RadiusContainer>
              );
            })}
          </RadiusContainer>
        ) : (
          <RadiusContainer className="ml-4 p-3">
            <p className="w-full text-center">No posts yet </p>
          </RadiusContainer>
        )}
      </div>
    </div>
  );
}
