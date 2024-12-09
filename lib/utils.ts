/**
 * Utils For ClassName
 */
export function classNames(...classNames: string[]): string {
  return classNames.join(" ");
}

export function classNameToArray(className: string): string[] {
  if (!className) return [];
  return className.split(" ").filter((name: string) => name.trim().length > 0);
}
