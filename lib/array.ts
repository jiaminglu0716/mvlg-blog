export function findDictFromArray(
  array: any[],
  condition: (value: any) => boolean
) {
  for (const item of array) {
    if (condition(item)) {
      return item;
    }
  }

  return null;
}

export function top(array: any[]) {
  return array[0];
}

export function last(array: any[]) {
  return array[array.length - 1];
}

export function distinct(array: any[]) {
  return Array.from(new Set(array));
}

export function range(
  start: number,
  end: number,
  callback: (index: number) => void
) {
  for (let i = start; i < end; i++) {
    callback(i);
  }
}
