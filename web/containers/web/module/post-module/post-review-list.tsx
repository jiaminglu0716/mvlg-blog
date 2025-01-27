import { DivProps } from "../../../../components/common/props";
import PostReviewItem, { PostReviewProps } from "./post-review-item";

export default function PostReviewList({
  reviews,
  ...props
}: DivProps & {
  reviews: PostReviewProps[];
}) {
  const reviewItems = reviews.map((review, index: number) => {
    return (
      <PostReviewItem
        className="my-3"
        index={index + 1}
        key={index}
        {...review}
      />
    );
  });

  return (
    <div key="post_review" {...props}>
      {reviewItems}
    </div>
  );
}
