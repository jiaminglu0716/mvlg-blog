import { PostType } from "../../../../interfaces/api";
import PostListItem from "./post-list-item";

export default function PostListContainer({ posts }: { posts: PostType[] }) {
  return (
    <div>
      {posts?.length ? (
        posts.map((post, index) => {
          return <PostListItem key={index} post={post} />;
        })
      ) : (
        <p>No blog posted yet :/</p>
      )}
    </div>
  );
}
