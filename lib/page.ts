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
