import matter from "gray-matter";
import { Post } from "../domain/Post";
import fs from "fs";
import { join } from "path";
import { fixDate } from "../utils";
import { Router } from "../../../config/router-config";
import { Cache } from "../../../lib/cache";

const postCache = new Cache<Post>();

export class PostRepository {
  private readonly POST_DIR = "posts";
  private readonly ROOT = process.cwd();
  private readonly POST_DIR_PATH = join(this.ROOT, this.POST_DIR);

  save(post: Post): void {
    throw new Error("Method not implemented.");
  }
  byId(id: string): Post {
    throw new Error("Method not implemented.");
  }
  delete(post: Post): void {
    throw new Error("Method not implemented.");
  }
  byLink(link: string): Post {
    const post = postCache.get(link);

    if (!post) {
      const fullPath = join(this.POST_DIR_PATH, `${link}.md`);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const post = Post.post()
        .content(content)
        .slugs(link.substring(0).split("/"))
        .link(Router.post(link))
        .date(fixDate(data?.date))
        .title(data?.title)
        .author(data?.author)
        .excerpt(data?.excerpt)
        .star(data?.star)
        .tags(data?.tags);

      postCache.set(link, post);

      return post;
    }

    return post;
  }

  bySlugs(slugs: string[]): Post {
    return this.byLink(`/${slugs.join("/")}`);
  }
}
