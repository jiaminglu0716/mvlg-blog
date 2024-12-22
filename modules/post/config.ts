import { join } from "path";
import { Cache } from "../../lib/cache";

const dirname = "posts";

export const postCache = new Cache();

export const config = {
  postsDirName: dirname,
  postsDirectory: join(process.cwd(), dirname),
  postTagKey: "tags",
  postStarKey: "star",
};

export const cacheKeys = {
  slugs: "post_slugs_key",
  tags: "post_tags_key",
  stats: "post_stats_key",
};

export const postFields = {
  slugs: ["slugs"],
  stats: ["title", config.postTagKey, config.postStarKey],
  note: ["slugs", "title", "excerpt", "date", "link", "tags"],
  post: ["slugs", "title", "excerpt", "date", "content", "tags"],
};
