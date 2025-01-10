import fs from "fs";

export function relativeFilePaths(
  path: string,
  hidden: boolean = true
): string[] {
  const stack = [path];
  const filepaths = [];

  while (stack.length > 0) {
    const dir = stack.shift();
    fs.readdirSync(dir).forEach((sub: string) => {
      const subpath = `${dir}/${sub}`;
      const stat = fs.statSync(subpath);

      if (stat.isDirectory()) {
        if (hidden && sub.startsWith("_")) {
          return;
        }
        stack.push(subpath);
      } else if (stat.isFile()) {
        filepaths.push(subpath);
      }
    });
  }

  return filepaths;
}
