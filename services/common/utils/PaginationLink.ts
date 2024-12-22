import { SinglePipeTask } from "../../../lib/pipeTask";

export class PaginationParamLink {
  private _pipe: SinglePipeTask<string>;
  private _link: string;

  public constructor(link: string) {
    this._pipe = new SinglePipeTask<string>();
    this._link = link;
  }

  public root(props?: { endWith: string }): this {
    this._pipe.add(
      props
        ? (value: string) => {
            if (props.endWith && value.indexOf(props.endWith) > -1) {
              return value.substring(
                0,
                value.lastIndexOf(props.endWith) + props.endWith.length
              );
            }
            return value;
          }
        : PaginationParamLink.root
    );
    return this;
  }

  public link(page: number): this {
    const _this = this;
    this._pipe.add((value: string) => {
      if (page < 2) {
        return value;
      } else {
        return `${value}/${page}`;
      }
    });
    return this;
  }

  public withQuery(): this {
    const qstr = new URL(this._link).getQueryString();
    this._pipe.add((value: string) => {
      return value + qstr;
    });
    return this;
  }

  public get(): string {
    return this._pipe.run(this._link);
  }

  public cget(): string {
    const result = this._pipe.run(this._link);
    this._pipe.clean();
    return result;
  }

  /**
   * @Static
   */

  /**
   * Samples:
   *  /root/1, /root, /root/3, ...
   */
  public static root(link: string): string {
    const url = new URL(link);
    const path = url.getURLPath();

    const lastIndex = path.lastIndexOf("/");
    const lastPath = path.substring(lastIndex + 1);

    if (/^\d+$/.test(lastPath)) {
      return path.substring(0, lastIndex);
    }
    return path;
  }

  public static page(link: string): number {
    const lastIndex = link.lastIndexOf("/");
    const lastPath = link.substring(lastIndex + 1);

    if (/^\d+$/.test(lastPath)) {
      return parseInt(lastPath);
    }

    return 1;
  }

  public static link(root: string, page: number): string {
    if (page < 2) {
      return root;
    } else {
      return `${root}/${page}`;
    }
  }
}

class URL {
  private _link: string;

  public constructor(link: string) {
    this._link = link;
  }

  public stats() {
    return {
      urlpath: this.getURLPath(),
      link: this._link,
      query: this.getQueryString(),
      queryParams: this.getQueryParams(),
    };
  }

  public getURLPath() {
    const qlabel = this._link.indexOf("?");
    const link = qlabel > 0 ? this._link.substring(0, qlabel) : this._link;
    return link[link.length - 1] == "/"
      ? link.substring(0, link.length - 1)
      : link;
  }

  public getQueryString() {
    const qlabel = this._link.indexOf("?");
    if (qlabel > 2) return this._link.substring(qlabel);
    return "";
  }

  public getQueryParams() {
    const qstr = this.getQueryString();
    const params = {};

    if (qstr.length == 0) return params;

    const lines = qstr.substring(1).split("&");

    try {
      lines.forEach((line: string) => {
        const [key, value] = line.split("=");
        params[key] = value;
      });
    } catch {
      console.warn("[WARN] Pls check your query params");
      return params;
    }
  }
}
