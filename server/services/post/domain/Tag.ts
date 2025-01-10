import { AggregateRoot } from "../../common/domain";

export class Tag extends AggregateRoot {
  private _title?: string;

  public constructor() {
    super();
    this._title = null;
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

  public generateIDFunc(id: string): string {
    return `tag-${id}`;
  }
}
