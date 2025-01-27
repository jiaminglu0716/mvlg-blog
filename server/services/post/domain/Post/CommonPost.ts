import { Post } from "./Post";

export class CommonPost extends Post {
  /**
   * @Factory
   */
  public static post(): CommonPost {
    return new CommonPost();
  }
}
