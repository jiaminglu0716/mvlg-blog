import ViewContainer from "../../components/container/view-container";
import BackNavigationContainer from "../../containers/web/navigation/back-navigation";
import PaginationContainer from "../../containers/web/pagination/pagenation";
import PostListContainer from "../../containers/web/module/post-list-module";
import { PostType } from "../../interfaces/api";

export default function PostsView({
  posts,
  pagination,
  condition,
}: {
  posts: PostType[];
  pagination: any;
  condition?: {
    endWith: string;
  };
}) {
  return (
    <ViewContainer>
      <BackNavigationContainer />

      <PostListContainer posts={posts} />

      <PaginationContainer pagination={pagination} condition={condition} />
    </ViewContainer>
  );
}
