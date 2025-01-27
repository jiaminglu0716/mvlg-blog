import { Dictionary } from "revt-toolkit";

export function dicts2htmlTable(rows: Dictionary[], titles?: string[]): string {
  if (rows.length == 0) return "";

  const columns = titles ?? Object.keys(rows[0]);
  const title = `<tr>${columns
    .map((column: string) => `<th>${column}</th>`)
    .join("")}</tr>`;
  const data = rows
    .map(
      (row: Dictionary) =>
        `<tr>${Object.values(row)
          .map((column: string) => `<td>${column}</td>`)
          .join("")}</tr>`
    )
    .join("");
  return `<table><thead>${title}</thead><tbody>${data}</tbody></table>`;
}
