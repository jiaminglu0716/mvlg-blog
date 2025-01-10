import { Char } from "../../../lib/char";

export function limit(text: string, limit: number = 40) {
  text = text.toString();
  const width = Char.countStringWidth(text);
  if (width <= limit) return text;
  else return Char.getWidthString(text, limit) + " ...";
}
