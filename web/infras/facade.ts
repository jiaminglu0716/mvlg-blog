import { updatedDict } from "../../lib/dict";
import { QLayoutData } from "../../server/services/layout/query/QLayoutData";
import { QListPost } from "../../server/services/post/query/QListPost";
import { QListTag } from "../../server/services/post/query/QListTag";
import { Router } from "../common";
import {
  LayoutDataType,
  TagType,
  PostType,
  TagCountType,
} from "../interfaces/api";

/**
 * Server API --> Web DTO
 */
export class Facade {
  public static toLayoutData(data: QLayoutData): LayoutDataType {
    return updatedDict<any>(data, (data) => {
      data.posts = this.toPosts<PostType>(data.posts);
      data.tags = this.toTags<TagType>(data.tags);
      data.toptags = this.toTags<TagCountType>(data.toptags);
      return data;
    });
  }

  public static toPost<T extends PostType>(post: QListPost): T {
    return updatedDict<any>(post, (post) => {
      post.href = Router.post(post.link);

      if (post.tags)
        post.tags = post.tags.map((tag: string): TagType => {
          return {
            title: tag,
            href: Router.tag(tag),
          };
        });

      return post;
    });
  }

  public static toPosts<T extends PostType>(posts: QListPost[]): T[] {
    return posts.map<T>(this.toPost);
  }

  public static toTag<T extends TagType>(tag: QListTag): T {
    return updatedDict<any>(tag, (tag) => {
      tag.href = Router.tag(tag.title);
      return tag;
    });
  }

  public static toTags<T extends TagType>(tags: QListTag[]): T[] {
    return tags.map<T>(this.toTag);
  }
}
