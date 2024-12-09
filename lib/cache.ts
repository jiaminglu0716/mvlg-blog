export class Cache {
  private cache: Map<string, any>;

  public constructor() {
    this.cache = new Map<string, any>();
  }

  public set(key: string, value: any): this {
    this.cache.set(key, value);
    return this;
  }

  public get(key: string): any {
    return this.cache.get(key);
  }
}
