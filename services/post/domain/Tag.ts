import { AggregateRoot } from "../../common/domain";

export class Tag extends AggregateRoot {
  private _title?: string;
  private _link?: string;

  public constructor() {
    super();
    this._title = null;
    this._link = null;
  }

  /**
   * @Factory
   */
  public static tag(): Tag {
    return new Tag();
  }

  public title(value: string): this {
    this.set("title", value);
    return this;
  }

  public link(value: string): this {
    this.set("link", value);
    return this;
  }

  public generateIDFunc(id: string): string {
    return `tag-${id}`;
  }
}
