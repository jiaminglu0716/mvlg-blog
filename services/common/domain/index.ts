import { Dictionary, uuid } from "revt-toolkit";

export abstract class Model {
  public __createAt: Date;

  public constructor() {
    this.__createAt = new Date();
  }

  /**
   * @properties
   */
  public get(fields?: string[]) {
    const properties = {};
    const allPropertyNames = Object.keys(this).filter(
      (property: string) => !property.startsWith("__")
    );

    if (fields) {
      fields = fields
        .map((field: string) => `_${field}`)
        .filter((field: string) => allPropertyNames.includes(field));
    } else {
      fields = allPropertyNames;
    }

    fields.forEach((field: string) => {
      properties[field.substring(1)] = this[field];
    });

    return properties;
  }

  public set(field: string, value: any) {
    this[`_${field}`] = value;
    return this;
  }

  public load(data: Dictionary): this {
    Object.keys(data).forEach((key: string) => {
      this.set(key, data[key]);
    });
    return this;
  }

  /**
   * @info
   */
  public createAt(): Date {
    return this.__createAt;
  }

  /**
   * @static
   */
  public static toList(models: Model[]): Dictionary[] {
    return models.map((model: Model) => model.get());
  }
}

export abstract class IDModel extends Model {
  private _id: string;

  public constructor() {
    super();
    this._id = this.generateID();
  }

  protected generateID(): string {
    return this.generateIDFunc(uuid());
  }

  protected generateIDFunc(id: string): string {
    return id;
  }

  public getID(): string {
    return this._id;
  }
}

export class AggregateRoot extends IDModel {}

export class Domain extends IDModel {}

export class ValueObject extends Model {}
