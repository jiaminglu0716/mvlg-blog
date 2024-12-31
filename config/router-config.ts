export class Router {
  public static cover = () => "/";

  public static home = () => "/";

  public static date = (year: number, month: number) =>
    `/date/${year}/${month}`;

  public static archive = () => "/archives";

  public static tags = () => `/tags`;

  public static tag = (tag: string) => `/tag/${tag}`;

  public static posts = () => "/posts";

  public static post = (link: string) => `/post/${link}`;

  public static links = () => "/links";
}
