import { Dispatch, SetStateAction, useRef, useState } from "react";
import { DivProps } from "../../../../components/common/props";
import RadiusContainer from "../../../../components/container/radius-container";
import IconSearchStroke from "../../../../components/icons/icon-search-stroke";
import { classNames } from "../../../../lib/utils";
import { PostService } from "../../../../web/services/post-service";
import { QListTag } from "../../../../services/post/query/QListTag";
import { QListPost } from "../../../../services/post/query/QListPost";
import SearchInformation from "./search-infomation";

/**
 * @后期更新的功能
 * 设置一个懒触发机制，从触发开始计时，若更新则重新计时。
 * 计时到期后将自动显示提示。借鉴于体感速度，一般为1~2秒内
 */
type SearchStateNavBarProps = {
  state: [boolean, Dispatch<SetStateAction<boolean>>];
  tags: QListTag[];
  posts: QListPost[];
  tagLimit?: number;
  postLimit?: number;
} & DivProps;

function lightKeyword(keyword: string) {
  return `<b class="text-red-600">${keyword}</b>`;
}

export default function SearchStateNavBar(props: SearchStateNavBarProps) {
  const { state, className, posts, tags, tagLimit, postLimit, ...subprops } =
    props;
  const [search, setSearch] = state;
  const ref = useRef(null);
  const [tipPosts, setTipPosts] = useState([]);
  const [tipTags, setTipTags] = useState([]);

  const postService = new PostService();

  function onChange() {
    const keyword = ref.current.value;
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
        : result.posts.map((post: QListPost) => {
            post.title = post.title.replace(keyword, lightKeyword(keyword));
            return post;
          })
    );
    setTipTags(
      empty
        ? []
        : result.tags.map((tag: QListTag) => {
            tag.title = tag.title.replace(keyword, lightKeyword(keyword));
            return tag;
          })
    );
  }

  return (
    <div onMouseLeave={(e) => setSearch(false)}>
      <RadiusContainer
        className={classNames(
          "h-14 m-auto flex items-center md:px-10 sm:px-7 px-5 font-serif",
          className
        )}
        {...subprops}
      >
        <div onClick={() => setSearch(false)}>
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
              "focus:outline-none focus:ring-blue-500"
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
