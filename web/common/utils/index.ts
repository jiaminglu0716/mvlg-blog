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

export * from "./markdown";

export * from "./date";

export * from "./text";
