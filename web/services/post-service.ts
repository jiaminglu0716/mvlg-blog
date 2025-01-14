import { eq, or } from "revt-toolkit";
import { distinct } from "../../lib/array";
import { PostType, TagType } from "../interfaces/api";
import { Router } from "../common";

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
    posts: PostType[],
    keyword: string,
    limit?: number
  ): PostType[] {
    let count = 0;
    return posts
      .filter((post: PostType) => {
        const status = this.match(
          post.title.toLowerCase(),
          keyword.toLowerCase()
        );
        if (status) {
          count++;
        }

        return status && (limit ? count <= limit : true);
      })
      .map((post: PostType) => {
        return {
          star: post.star,
          title: post.title,
          link: post.link,
          href: Router.post(post.link),
        };
      });
  }

  public searchTags(
    tags: TagType[],
    keyword: string,
    limit?: number
  ): TagType[] {
    let count = 0;
    return tags
      .filter((tag: TagType) => {
        const status = this.match(
          tag.title.toLowerCase(),
          keyword.toLowerCase()
        );
        if (status) {
          count++;
        }

        return status && (limit ? count <= limit : true);
      })
      .map((tag: TagType) => {
        return {
          title: tag.title,
          href: Router.tag(tag.title),
        };
      });
  }

  public search(
    keyword: string,
    props?: {
      limit?: number;
      posts?: PostType[];
      tags?: TagType[];
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
