export {
  getAllPosts,
  getPostBySlugs,
  getPostSlugs,
  getAllPostsByFilter,
} from "./post";

export type { Post } from "./model";

export { getAllPostsByTag, getAllPostsByTags, getAllTags } from "./tag";

export { postFields } from "./config";
