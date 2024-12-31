import { Archive } from "../../post/domain/Archive";
import { Post } from "../../post/domain/Post";
import { PostQueryService } from "../../post/query/PostQueryService";
import { QListPost } from "../../post/query/QListPost";
import { QLayoutData } from "./QLayoutData";

export class LayoutQueryService {
  private postService = new PostQueryService();

  public queryLayoutData(): QLayoutData {
    const postService = this.postService;
    const posts = postService
      .listPosts(["link", "title", "date"])
      .map((post: QListPost) => Post.post().load(post));

    const y1m = Archive.archive().posts(posts).sorted(false).linkByY1M();

    return {
      archives: y1m,
      stat: postService.listStats(),
      posts: postService.listPosts(["link", "title", "date"]),
      tags: postService.listTags(),
      toptags: postService.topTags(20),
    };
  }
}
