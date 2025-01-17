import SearchStateNavBar from "./search-state-navbar";
import NoSearchStateNavBar from "./no-search-state-navbar";
import { PostType, TagType } from "../../../../interfaces/api";
import { useSearch } from "../../../../hooks/useSearch";
import { useSetting } from "../../../../hooks/useSetting";

export default function SearchNavigation({
  posts,
  tags,
}: {
  posts: PostType[];
  tags: TagType[];
}) {
  const { search } = useSearch();
  const { settings } = useSetting();

  return (
    <div className="text-[#f2f2f2]">
      {search && settings.searchBar ? (
        <SearchStateNavBar tags={tags} posts={posts} />
      ) : (
        <NoSearchStateNavBar />
      )}
    </div>
  );
}
