import fs from "fs";

/**
 * Transfer image blob to base64 link,
 * no suit for large data markdown file in nextjs
 * @param imgpath
 * @returns
 */
export function base64ImageUrl(imgpath: string) {
  const bData = fs.readFileSync(imgpath);
  const base64Str = bData.toString("base64");
  return "data:image/png;base64," + base64Str;
}
