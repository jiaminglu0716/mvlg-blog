import { useContext } from "react";
import SearchStateNavBar from "./search-state-navbar";
import NoSearchStateNavBar from "./no-search-state-navbar";
import { SearchContext } from "../../../../contexts/searchContext";
import { PostType, TagType } from "../../../../interfaces/api";

export default function SearchNavigation({
  posts,
  tags,
}: {
  posts: PostType[];
  tags: TagType[];
}) {
  const { search } = useContext(SearchContext);

  return (
    <div className="text-[#f2f2f2]">
      {search ? (
        <SearchStateNavBar tags={tags} posts={posts} />
      ) : (
        <NoSearchStateNavBar />
      )}
    </div>
  );
}
