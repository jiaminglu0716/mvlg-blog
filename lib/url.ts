export const clearUrl = (url: string) => {
  const { origin, pathname } = new URL(url);
  return `${origin}${pathname}`;
};

export const subUrlPath = (path: string, start: number, end?: number) => {
  const pathArr = path.split("/");
  const left = start + 1;
  const right = end != undefined ? end + 1 : pathArr.length - 1;

  if (right > pathArr.length - 1) {
    throw new Error("[ERROR] out of bound.");
  }

  return ["", ...pathArr.slice(left, right)].join("/");
};
