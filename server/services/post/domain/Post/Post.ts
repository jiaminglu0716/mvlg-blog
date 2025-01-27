import { Dictionary } from "revt-toolkit";
import { SinglePipeTask } from "../../../../../lib/pipeTask";
import { imageLink } from "../../../../common/utils/link";
import { AggregateRoot } from "../../../common/domain";
import { transferMarkdownLink } from "../../utils/markdown";
import { PostType } from "./PostType";

export class Post extends AggregateRoot {
  /**
   * @PostType
   */
  protected _type: PostType;

  /**
   * @PostURI
   */
  protected _slugs: string[];
  protected _link?: string;

  /**
   * @PostBaseMeta
   */
  protected _cover: string;
  protected _title?: string;
  protected _date: string;
  protected _author?: string;
  protected _excerpt?: string;

  /**
   * @PostContent
   */
  protected _content?: string;

  /**
   * @PostFeedback
   */
  protected _tags: string[];
  protected _star: boolean;

  public constructor() {
    super();
    this._type = PostType.POST;
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
   * @PostAggregateRootFactory
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

  /**
   * @Getter
   */
  public getType(): PostType {
    return this._type;
  }

  public getDate(): Date {
    return new Date(this._date);
  }

  public getTitle(): string {
    return this._title;
  }

  public getCover(): string {
    return this._cover;
  }

  public getContent(): string {
    return this._content == null ? this._content : this.contentFilter();
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

  public get(fields?: string[]) {
    const properties: Dictionary = super.get(fields);
    properties.content = this.getContent();
    return properties;
  }
}
