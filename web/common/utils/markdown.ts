import type { VFileCompatible } from "vfile";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { Dictionary } from "revt-toolkit";

export async function markdownToHtml(markdown: VFileCompatible) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}

export function dict2mdTable(rows: Dictionary[]): string {
  if (rows.length == 0) return "";

  const columns = Object.keys(rows[0]);
  const title = `|${columns.join("|")}|`;
  const align = `|${columns.map(() => ":--").join("|")}|`;
  const data = rows.map((row: Dictionary) => {
    return `|${Object.values(row).join("|")}|`;
  });
  return [title, align, ...data].join("\r\n");
}
