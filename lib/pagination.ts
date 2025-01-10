export function pageSize(page: number, fsize: number, size: number) {
  return fsize + (page - 1) * size;
}

export function pageBound(
  page: number,
  fsize: number,
  size: number,
  total: number
) {
  const lbound = page == 1 ? 0 : fsize + (page - 2) * size;
  const rbound = page == 1 ? fsize : lbound + size;
  return [lbound, rbound > total ? total : rbound];
}

export function getPageItems<T>(
  page: number,
  fsize: number,
  size: number,
  total: number,
  items: T[]
): T[] {
  const [left, right] = pageBound(page, fsize, size, total);
  return items.slice(left, right);
}

export type PaginationInfo = {
  total: number;
  page: number;
  size: number;
  prev: number;
  next: number;
  pagenum: number;
  canPrev: boolean;
  canNext: boolean;
};

export class Pagination {
  private _page: number;
  private _size: number;

  public constructor(page: number, size: number) {
    this._page = page;
    this._size = size;
  }

  public static pagination(page: number, size: number): Pagination {
    return new Pagination(page, size);
  }

  public skip(): number {
    return (this._page - 1) * this._size;
  }

  public limit(): number {
    return this._size;
  }

  public threshold(total: number): number {
    const volume = this._page * this._size;
    return total > volume ? volume : total;
  }

  public get(total: number): PaginationInfo {
    const prev = this.prev();
    const next = this.next(total);

    return {
      total: total,
      page: this._page,
      size: this._size,
      prev: prev,
      next: next,
      pagenum: this.num(total),
      canPrev: this._page > prev,
      canNext: this._page < next,
    };
  }

  public prev(): number {
    return this._page < 2 ? 1 : this._page - 1;
  }

  public next(total?: number): number {
    return total && this._page * this._size >= total
      ? this._page
      : this._page + 1;
  }

  public num(total: number): number {
    return Math.floor(total / this._size) + (total % this._size == 0 ? 0 : 1);
  }
}
