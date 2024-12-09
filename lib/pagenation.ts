export function getPage<T>(data: T[], page: number, size: number): T[] {
  const total = data.length;
  const left = (page - 1) * size;

  if (left > total) return [];

  const boundary = page * size;
  const right = boundary > total ? total : boundary;

  return data.slice(left, right);
}

export function hasPrev<T>(page: number): boolean {
  return page > 1;
}

export function hasNext<T>(data: T[], page: number, size: number): boolean {
  const total = data.length;
  return page * size >= total;
}

export function pagenation<T>(data: T[], page: number, size: number) {
  // const total = data.length;
}
