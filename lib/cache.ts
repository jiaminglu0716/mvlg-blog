export class Cache<T> {
  private cache: Map<string, T>;

  public constructor() {
    this.cache = new Map<string, T>();
  }

  public set(key: string, value: T): this {
    this.cache.set(key, value);
    return this;
  }

  public get(key: string): T {
    return this.cache.get(key);
  }
}
