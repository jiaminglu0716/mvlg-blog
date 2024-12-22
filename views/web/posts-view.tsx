import ViewContainer from "../../components/container/view-container";
import { QListPost } from "../../services/post/query/QListPost";
import { PaginationInfo } from "../../services/common/utils/PaginationInfo";
import BackNavigationContainer from "../../containers/web/navigation/back-navigation";
import PaginationContainer from "../../containers/web/pagination/pagenation";
import PostListContainer from "../../containers/web/module/post-list-module";

export default function PostsView({
  posts,
  pagination,
  condition,
}: {
  posts: QListPost[];
  pagination: PaginationInfo;
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
