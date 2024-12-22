import { join } from "path";
import { relativeFilePaths } from "../../../lib/file";
import { Post } from "../domain/Post";
import { QListPost } from "./QListPost";
import { PostRepository } from "../infrastructure/PostRepository";
import { QListTag } from "./QListTag";
import { QPostStats } from "./QPostStat";
import { Pagination } from "../../common/utils/Pagination";

export class PostQueryService {
  private readonly POST_DIR = "posts";
  private readonly ROOT = process.cwd();
  private readonly POST_DIR_PATH = join(this.ROOT, this.POST_DIR);

  private readonly postRepository = new PostRepository();

  public listLinks(): string[] {
    return relativeFilePaths(this.POST_DIR_PATH)
      .filter((path: string) => path.endsWith(".md"))
      .map((path: string) =>
        path.replace(`${this.POST_DIR_PATH}/`, "").replace(".md", "")
      );
  }

  public countPosts(): number {
    return this.listLinks().length;
  }

  public countPostsByTag(tag: string): number {
    return this.listPostsByTag(tag, []).length;
  }

  public listPostsByFilter(
    filter: (post: Post) => boolean,
    fields?: string[],
    pagination?: Pagination
  ): QListPost[] {
    const links = this.listLinks();

    const posts = links
      .map((link) => this.postRepository.byLink(link))
      .filter(filter)
      .sort((prev: Post, cur: Post) =>
        prev.getDate().getTime() > cur.getDate().getTime() ? -1 : 1
      )
      .map((post: Post) => post.get(fields));

    if (pagination) {
      return posts.slice(pagination.skip(), pagination.threshold(posts.length));
    }

    return posts;
  }

  public listPosts(fields?: string[], pagination?: Pagination): QListPost[] {
    return this.listPostsByFilter(() => true, fields, pagination);
  }

  public listPostsByTag(
    tag: string,
    fields?: string[],
    pagination?: Pagination
  ): QListPost[] {
    return this.listPostsByFilter(
      (post: Post) => post.hasTag(tag),
      fields,
      pagination
    );
  }

  public listPostsByTags(
    tags: string[],
    fields?: string[],
    pagination?: Pagination
  ): QListPost[] {
    return this.listPostsByFilter(
      (post: Post) =>
        tags
          .map((tag: string) => post.hasTag(tag))
          .reduce((prev, cur) => prev && cur),
      fields,
      pagination
    );
  }

  public listTags(): QListTag[] {
    const tagset = new Set<string>();

    this.listPosts(["tags"])
      .map((post: QListPost) => post.tags)
      .filter(
        (tags) => tags != undefined && Array.isArray(tags) && tags.length > 0
      )
      .forEach((tags) => tags.forEach((tag) => tagset.add(tag)));

    const tags: QListTag[] = Array.from(tagset).map((tag) => {
      return {
        title: tag,
        link: `/tag/${tag}`,
      };
    });

    return tags;
  }

  public listStats(): QPostStats {
    const tagset = new Set<string>();
    const posts = this.listPosts(["title", "star", "tags"]);
    const stats: QPostStats = { posts: posts.length, stars: 0, tags: 0 };

    posts.forEach((post: QListPost) => {
      post?.tags?.forEach((tag) => tagset.add(tag));
      if (post["star"]) {
        stats.stars += 1;
      }
    });

    stats.tags = Array.from(tagset).length;

    return stats;
  }
}
