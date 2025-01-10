import { distinct } from "../../../../lib/array";
import { SinglePipeTask } from "../../../../lib/pipeTask";
import { imageLink } from "../../../common/utils/link";
import { AggregateRoot } from "../../common/domain";
import { Dictionary } from "revt-toolkit";
import { transferMarkdownLink } from "../utils/markdown";

export enum PostImageMode {
  // load with base64 link
  LOCAL = "local",
  // load with current server
  SERVER = "server",
  // load with server api or image oss(current no offer)
  // API = "api",
}

export class Post extends AggregateRoot {
  private _slugs: string[];
  private _title?: string;
  private _author?: string;
  private _link?: string;
  private _date: string;
  private _content?: string;
  private _excerpt?: string;
  private _tags: string[];
  private _star: boolean;
  private _cover: string;

  public constructor() {
    super();
    this._date = new Date().toUTCString();
    this._star = false;
    this._slugs = [];
    this._tags = [];
    this._content = null;
    this._author = null;
    this._link = null;
    this._excerpt = null;
    this._tags = null;
    this._cover = null;
  }

  /**
   * @Factory
   */
  public static post(): Post {
    return new Post();
  }

  /**
   * @builder
   */
  public slugs(value?: string[]): this {
    if (!value) return this;
    this._slugs = value;
    return this;
  }

  public title(value?: string): this {
    if (!value) return this;
    this._title = value;
    return this;
  }

  public author(value?: string): this {
    if (!value) return this;
    this._author = value;
    return this;
  }

  public link(value?: string): this {
    if (!value) return this;
    this._link = value;
    return this;
  }

  public content(value?: string): this {
    if (!value) return this;
    this._content = value;
    return this;
  }

  public excerpt(value?: string): this {
    if (!value) return this;
    this._excerpt = value;
    return this;
  }

  public star(value?: boolean): this {
    if (!value) return this;
    this._star = value;
    return this;
  }

  public tags(value?: string[]): this {
    if (!value) return this;
    this._tags = value;
    return this;
  }

  public date(value?: string): this {
    if (!value) return this;
    this._date = value;
    return this;
  }

  public cover(value?: string): this {
    if (!value) return this;
    this._cover = value;
    return this;
  }

  // public cover(
  //   value?: string,
  //   options?: {
  //     mode?: PostImageMode;
  //     baseUrl?: string;
  //   }
  // ): this {
  //   if (!value) return this;

  //   const imgpath = value.trim().startsWith("/")
  //     ? `${options?.baseUrl.trim() ?? ""}${value}`
  //     : value;

  //   switch (options?.mode ?? PostImageMode.LOCAL) {
  //     case PostImageMode.LOCAL:
  //       this._cover = base64ImageUrl(imgpath);
  //       break;
  //     case PostImageMode.SERVER:
  //       this._cover = value;
  //       break;
  //     default:
  //       this._cover = value;
  //   }
  //   return this;
  // }

  /**
   * @Filter
   */
  private contentFilter(): string {
    return new SinglePipeTask<string>()
      .adds([
        (value: string) =>
          transferMarkdownLink(value, (imglink) => imageLink(imglink)),
      ])
      .run(this._content);
  }

  /**
   * @Getter
   */
  public getDate(): Date {
    return new Date(this._date);
  }

  public getContent(): string {
    return this._content == null ? this._content : this.contentFilter();
  }

  public getTitle(): string {
    return this._title;
  }

  public getCover(): string {
    return this._cover;
  }

  public hasStar(): boolean {
    return this._star;
  }

  public hasTag(tag: string): boolean {
    return this._tags?.includes(tag);
  }

  /**
   * @Override
   */
  protected generateIDFunc(id: string): string {
    return `post-${id}`;
  }

  public get(fields?: string[]) {
    const properties: Dictionary = super.get(fields);
    properties.content = this.getContent();
    return properties;
  }
}
