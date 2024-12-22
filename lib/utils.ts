/**
 * Utils For ClassName
 */
export function classNames(...classNames: string[]): string {
  classNames = Array.from(new Set(classNames));
  return classNames.join(" ");
}

export function classNameToArray(className: string): string[] {
  if (!className) return [];
  return className.split(" ").filter((name: string) => name.trim().length > 0);
}

export function tailwindFont(font: string) {
  return `font-['${font.replaceAll(" ", "_")}']`;
}

export function pixel(size: number) {
  return `${size}px`;
}

/**
 * Text
 */
function limit(text: string, limit: number = 20) {
  const len = text.length;
  if (len <= limit) return text;
  else return text.substring(0, limit) + " ...";
}
