import { useRef, useState } from "react";
import { DivProps } from "../../../../components/common/props";
import RadiusContainer from "../../../../components/container/radius-container";
import IconSearchStroke from "../../../../components/icons/icon-search-stroke";
import { classNames } from "../../../../common/utils";
import { PostService } from "../../../../services/post-service";
import SearchInformation from "./search-infomation";
import { AppConfig, Router } from "../../../../common";
import { useSearch } from "../../../../hooks/useSearch";
import { PostType, TagType } from "../../../../interfaces/api";

type SearchStateNavBarProps = {
  tags: any[];
  posts: any[];
  tagLimit?: number;
  postLimit?: number;
} & DivProps;

function lightKeyword(keyword: string) {
  return `<b class="text-red-600">${keyword}</b>`;
}

export default function SearchStateNavBar(props: SearchStateNavBarProps) {
  const { className, posts, tags, tagLimit, postLimit, ...subprops } = props;
  const { toNavBar } = useSearch();
  const ref = useRef(null);
  const [tipPosts, setTipPosts] = useState([]);
  const [tipTags, setTipTags] = useState([]);

  const postService = new PostService();

  function search(keyword: string) {
    const empty = keyword.length < 1;

    const result = postService.search(keyword, {
      posts,
      tags,
      tagLimit: tagLimit ?? 40,
      postLimit: postLimit ?? 10,
    });

    setTipPosts(
      empty
        ? []
        : result.posts.map((post: PostType) => {
            post.title = post.title.replace(keyword, lightKeyword(keyword));
            return post;
          })
    );
    setTipTags(
      empty
        ? []
        : result.tags.map((tag: TagType) => {
            tag.title = tag.title.replace(keyword, lightKeyword(keyword));
            return tag;
          })
    );
  }

  /**
   * Search value input gaptime view
   */
  const [wait, setWait] = useState(false);

  function onChange() {
    const keyword = ref.current.value;

    if (!wait) {
      setWait(true);
      search(keyword);

      setTimeout(() => {
        setWait(false);
      }, AppConfig.SEARCH_VIEW_GAP_TIME);
    }
  }

  return (
    <div onMouseLeave={toNavBar}>
      <RadiusContainer
        className={classNames(
          "h-14 m-auto flex items-center md:px-10 sm:px-7 px-5 font-serif",
          className
        )}
        {...subprops}
      >
        <div onClick={toNavBar}>
          <IconSearchStroke size="22" />
        </div>
        <div className="ml-4 w-[90%]">
          <input
            type="search"
            id="search"
            ref={ref}
            onChange={onChange}
            className={classNames(
              "block w-full h-8",
              "px-4 ps-5",
              "text-lg text-gray-900",
              "focus:outline-none focus:ring-blue-500",
              "bg-transparent",
              "placeholder:text-[#f2f2f2]"
            )}
            placeholder="Search Keyword"
            autoFocus
            required
          />
        </div>
      </RadiusContainer>
      <SearchInformation className="mt-4" tags={tipTags} posts={tipPosts} />
    </div>
  );
}
