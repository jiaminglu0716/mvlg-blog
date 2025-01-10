import { distinct } from "../../../../lib/array";
import { SinglePipeTask } from "../../../../lib/pipeTask";
import { base64ImageUrl } from "../../../common/utils/image";
import { PostImageMode } from "../domain/Post";

export function transferContent(markdown: string, dirpath: string): string {
  /**
   * handle: markdown raw text
   */
  return new SinglePipeTask<string>()
    .adds([
      (value: string) =>
        transferMarkdownLink(value, (imglink) => {
          imglink = imglink.trim();
          const imgpath = imglink.startsWith("/")
            ? `${dirpath ?? ""}${imglink}`
            : imglink.startsWith(".")
            ? `${dirpath ?? ""}/${imglink}`
            : imglink;

          switch (PostImageMode.LOCAL) {
            case PostImageMode.LOCAL:
              return base64ImageUrl(imgpath);
            // case PostImageMode.SERVER:
            //   this._cover = value;
            //   break;
            default:
              return imglink;
          }
        }),
    ])
    .run(markdown);
}

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
