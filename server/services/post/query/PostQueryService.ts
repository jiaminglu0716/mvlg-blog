import { join } from "path";
import { relativeFilePaths } from "../../../common/utils/file";
import { QListPost } from "./QListPost";
import { PostRepository } from "../infrastructure/PostRepository";
import { QListTag } from "./QListTag";
import { QPostStats } from "./QPostStat";
import { Pagination } from "../../../../lib/pagination";
import { QCountTag } from "./QCountTagList";
import { CollectionPost, getPostExFieldsByType } from "../utils/postType";
import { addNeedFields } from "../utils";

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
    filter: (post: CollectionPost) => boolean,
    fields?: string[],
    pagination?: Pagination
  ): QListPost[] {
    addNeedFields(fields, ["type"]);

    const links = this.listLinks();
    const posts = links
      .map((link) => this.postRepository.byLink(link))
      .filter(filter)
      .sort((prev: CollectionPost, cur: CollectionPost) =>
        prev.getDate().getTime() > cur.getDate().getTime() ? -1 : 1
      )
      .map((post: CollectionPost) =>
        post.get(getPostExFieldsByType(post.getType(), fields))
      );

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
      (post: CollectionPost) => post.hasTag(tag),
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
      (post: CollectionPost) =>
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
      };
    });

    return tags;
  }

  public listStats(): QPostStats {
    const tagset = new Set<string>();
    const posts = this.listPosts(["title", "star", "tags"]);
    const stats: QPostStats = {
      posts: posts.length,
      stars: 0,
      tags: 0,
    };

    posts.forEach((post: QListPost) => {
      post?.tags?.forEach((tag) => tagset.add(tag));
      if (post["star"]) {
        stats.stars += 1;
      }
    });

    stats.tags = Array.from(tagset).length;

    return stats;
  }

  private match(str: string, mask: string): boolean {
    if (str.includes(mask)) return true;
    if (
      ((str: string, mask: string) => {
        let count = 0;
        for (let i = 0; i < mask.length; i++) {
          const char = mask[i];
          if (str.includes(char)) {
            count++;
          }
        }
        return count == mask.length;
      })(str, mask)
    )
      return true;
    return false;
  }

  public listByTitle(keyword: string, limit?: number): QListPost[] {
    let count = 0;
    return this.listPostsByFilter(
      (post: CollectionPost) => {
        const status = this.match(
          post.getTitle().toLowerCase(),
          keyword.toLowerCase()
        );
        if (status) {
          count++;
        }

        return status && (limit ? count <= limit : true);
      },
      ["star", "title", "link"]
    );
  }

  public countTags(): QCountTag[] {
    const countDict = {};
    const posts = this.listPosts(["tags"]);

    posts.forEach((post: QListPost) => {
      post.tags?.forEach((tag: string) => {
        if (!countDict[tag]) countDict[tag] = 0;
        countDict[tag] += 1;
      });
    });

    return Object.keys(countDict).map((tag: string) => {
      return {
        title: tag,
        count: countDict[tag],
      };
    });
  }

  public topTags(limit: number = 10): QCountTag[] {
    const countTags = this.countTags();
    countTags.sort((a: QCountTag, b: QCountTag) => b.count - a.count);

    return countTags.slice(
      0,
      countTags.length > limit ? limit : countTags.length
    );
  }
}
