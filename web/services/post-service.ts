import { eq, or } from "revt-toolkit";
import { distinct } from "../../lib/array";
import { QListPost } from "../../services/post/query/QListPost";
import { QListTag } from "../../services/post/query/QListTag";

export class PostService {
  private match(str: string, mask: string): boolean {
    return or(
      str.includes(mask),
      ((str: string, mask: string) =>
        eq(
          distinct(mask.split(""))
            .filter((char: string) => char.trim().length > 0)
            .filter((char: string) => str.includes(char)).length,
          mask.length
        ))(str, mask)
    );
  }

  public searchPosts(
    posts: QListPost[],
    keyword: string,
    limit?: number
  ): QListPost[] {
    let count = 0;
    return posts
      .filter((post: QListPost) => {
        const status = this.match(
          post.title.toLowerCase(),
          keyword.toLowerCase()
        );
        if (status) {
          count++;
        }

        return status && (limit ? count <= limit : true);
      })
      .map((post: QListPost) => {
        return {
          star: post.star,
          title: post.title,
          link: post.link,
        };
      });
  }

  public searchTags(
    tags: QListTag[],
    keyword: string,
    limit?: number
  ): QListTag[] {
    let count = 0;
    return tags
      .filter((tag: QListTag) => {
        const status = this.match(
          tag.title.toLowerCase(),
          keyword.toLowerCase()
        );
        if (status) {
          count++;
        }

        return status && (limit ? count <= limit : true);
      })
      .map((tag: QListTag) => {
        return {
          title: tag.title,
          link: tag.link,
        };
      });
  }

  public search(
    keyword: string,
    props?: {
      limit?: number;
      posts?: QListPost[];
      tags?: QListTag[];
      tagLimit?: number;
      postLimit?: number;
    }
  ) {
    const { posts, tags, limit } = props;
    const result = { posts: [], tags: [] };

    let { tagLimit, postLimit } = props;
    tagLimit = tagLimit ?? limit;
    postLimit = postLimit ?? limit;

    if (posts) result.posts = this.searchPosts(posts, keyword, postLimit);

    if (tags) result.tags = this.searchTags(tags, keyword, tagLimit);

    return result;
  }
}
