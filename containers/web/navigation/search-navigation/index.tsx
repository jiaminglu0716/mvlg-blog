import { useEffect, useRef, useState } from "react";
import { QListPost } from "../../../../services/post/query/QListPost";
import SearchInformation from "./search-infomation";
import SearchStateNavBar from "./search-state-navbar";
import NoSearchStateNavBar from "./no-search-state-navbar";
import { QListTag } from "../../../../services/post/query/QListTag";

export default function SearchNavigation({
  posts,
  tags,
}: {
  posts: QListPost[];
  tags: QListTag[];
}) {
  const state = useState(false);
  const [search, setSearch] = state;

  return (
    <div>
      {search ? (
        <SearchStateNavBar state={state} tags={tags} posts={posts} />
      ) : (
        <NoSearchStateNavBar state={state} />
      )}
    </div>
  );
}
