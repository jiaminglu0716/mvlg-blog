import { Archive } from "../../post/domain/Archive";
import { PostQueryService } from "../../post/query/PostQueryService";
import { QListPost } from "../../post/query/QListPost";
import { QLayoutData } from "./QLayoutData";
import profileData from "../../../../data/profile.json";
import { updatedDict } from "../../../../lib/dict";
import { imageLink } from "../../../common/utils/link";
import { getPostByData } from "../../post/utils/postType";

export class LayoutQueryService {
  private postService = new PostQueryService();

  public queryLayoutData(): QLayoutData {
    const postService = this.postService;
    const posts = postService
      .listPosts(["link", "title", "date"])
      .map((post: QListPost) => getPostByData(post));

    const y1m = Archive.archive().posts(posts).sorted(false).linkByY1M();

    return {
      archives: y1m,
      stat: postService.listStats(),
      posts: postService.listPosts(["link", "title", "date"]),
      tags: postService.listTags(),
      toptags: postService.topTags(20),
      profile: updatedDict(profileData, (profile) => {
        profile.avatar = imageLink(profile.avatar);
        return profile;
      }),
    };
  }
}
