export const clearUrl = (url: string) => {
  const { origin, pathname } = new URL(url);
  return `${origin}${pathname}`;
};
