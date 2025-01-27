import { GalgameReviewPostType, PostType } from "../../interfaces/api";

export function getPostTitle(post: PostType) {
  switch (post.type) {
    case "galgame_review":
      return `Review - ${
        (post as GalgameReviewPostType)?.meta?.name ?? "galgame"
      }`;
    default:
      return post.title;
  }
}
