export class Router {
  /**
   * @Page Profile
   */
  public static cover = () => "/";

  /**
   * @Page Home
   */
  public static home = () => "/home";

  /**
   * @Page Post List by Year & Month
   */
  public static date = (year: number, month: number) =>
    `/date/${year}/${month}`;

  /**
   * @Page Post Timeline with Scroll Flash
   */
  public static archive = () => "/archives";

  /**
   * @Page All Post Tags
   */
  public static tags = () => `/tags`;

  /**
   * @Page Post List by a Tag
   */
  public static tag = (tag: string) => `/tag/${tag}`;

  /**
   * @Page Post List (ALL)
   */
  public static posts = () => "/posts";

  /**
   * @Page Post Detail
   */
  public static post = (link: string) => `/post/${link}`;

  /**
   * @Page Share Links
   */
  public static links = () => "/links";

  /**
   * @Page Settings
   */
  public static setting = () => "/setting";
}
