import matter from "gray-matter";
import fs from "fs";
import { join } from "path";
import { Cache } from "../../../../lib/cache";
import { AppConfig } from "../../../common/config/app-config";
import {
  CollectionPost,
  getPostByType,
  getPostTypeByLink,
} from "../utils/postType";

const postCache = new Cache<CollectionPost>();

export class PostRepository {
  private readonly POST_DIR = "posts";
  private readonly ROOT = process.cwd();
  private readonly POST_DIR_PATH = join(this.ROOT, this.POST_DIR);

  save(post: CollectionPost): void {
    throw new Error("Method not implemented.");
  }
  byId(id: string): CollectionPost {
    throw new Error("Method not implemented.");
  }
  delete(post: CollectionPost): void {
    throw new Error("Method not implemented.");
  }
  byLink(link: string): CollectionPost {
    // const post = postCache.get(link);

    // if (!post) {
    const fullPath = join(
      this.POST_DIR_PATH,
      `${link}${AppConfig.POST_SUFFIX}`
    );
    const fileContents = fs.readFileSync(fullPath);
    const { data, content } = matter(fileContents);

    const postType = getPostTypeByLink(link);
    const post = getPostByType(postType, link, data, content);

    // postCache.set(link, post);

    return post;
    // }

    // return post;
  }

  bySlugs(slugs: string[]): CollectionPost {
    return this.byLink(`${slugs.join("/")}`);
  }
}
