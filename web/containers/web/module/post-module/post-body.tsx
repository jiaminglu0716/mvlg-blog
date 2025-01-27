import { useEffect, useState } from "react";
import { markdownToHtml } from "../../../../common";
import { PostType } from "../../../../interfaces/api";
import PostHtmlBody from "./post-html-body";
import PostReviewList from "./post-review-list";
import SimpleLineTable from "../../../../components/common/table/simple-line-table";
import SimpleKVTable from "../../../../components/common/table/simple-kv-table";

function getPostBodyItemsByType(post: PostType) {
  const type = post.type;
  const [content, setContent] = useState("");

  useEffect(() => {
    markdownToHtml(post.content).then(setContent);
  }, []);

  switch (type) {
    case "galgame_review":
      return (
        <>
          <SimpleKVTable
            className="mb-10"
            keys={Object.keys(post.meta)}
            values={Object.values(post.meta)}
          />
          {content && <PostHtmlBody className="py-5" content={content} />}
          <div className="border-4 rounded-xl">
            <SimpleLineTable
              data={post.playrecs.map((playrec) => Object.values(playrec))}
              title={[
                "Platform",
                "Start",
                "Finish",
                "Days",
                "Gap",
                "Playtime",
                "Status",
              ]}
              index={true}
            />
          </div>
          <PostReviewList className="mt-10" reviews={post?.reviews} />
        </>
      );
    default:
      return (
        <>
          <PostHtmlBody content={content} />
        </>
      );
  }
}

export default function PostBody({ post }: { post: PostType }) {
  return getPostBodyItemsByType(post);
}
