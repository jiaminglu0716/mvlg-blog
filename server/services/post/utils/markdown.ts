import { distinct } from "../../../../lib/array";

export function transferMarkdownLink(
  markdown: string,
  transformer?: (link: string) => string
) {
  const matchList = markdown.match(/\[.*?\]\(.*?\)/g);

  if (matchList) {
    const list = distinct(matchList);
    for (const match of list) {
      const [left, right] = [match.indexOf("(") + 1, match.indexOf(")")];

      const [prev, link, after] = [
        match.substring(0, left),
        match.substring(left, right),
        match.substring(right),
      ];

      const text = [prev, transformer(link), after].join("");

      markdown = markdown.replace(match, text);
    }
  }

  return markdown;
}
