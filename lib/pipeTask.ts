export type SingleTask<T> = (value: T) => T;

export function singlePipe<T>(value: T, pipeFuncs: SingleTask<T>[]) {
  let result = value;

  for (const pipeFunc of pipeFuncs) {
    result = pipeFunc(result);
  }

  return result;
}

export class SinglePipeTask<T> {
  private _tasks: Array<SingleTask<T>>;

  public constructor() {
    this._tasks = new Array<SingleTask<T>>();
  }

  public add(task: SingleTask<T>): this {
    this._tasks.push(task);
    return this;
  }

  public adds(tasks: SingleTask<T>[]): this {
    tasks.forEach((task: SingleTask<T>) => this.add(task));
    return this;
  }

  public clean(): this {
    this._tasks = new Array<SingleTask<T>>();
    return this;
  }

  public run(value: T): T {
    return singlePipe(value, this._tasks);
  }
}
