import { join } from "path";
import { Cache } from "../../lib/cache";

const dirname = "posts";

export const postCache = new Cache();

export const config = {
  postsDirName: dirname,
  postsDirectory: join(process.cwd(), dirname),
  postTagKey: "tags",
};

export const cacheKeys = {
  slugs: "post_slugs_key",
  tags: "post_tags_key",
};

export const postFields = {
  slugs: ["slugs"],
  note: ["slugs", "title", "excerpt", "date", "link"],
  post: ["slugs", "title", "excerpt", "date", "content"],
};
