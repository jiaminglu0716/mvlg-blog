import { deepClone, Dictionary } from "revt-toolkit";

/**
 * Update target dict and return new dict.
 * @param dict
 * @param func
 * @returns
 */
export function updatedDict<T extends Dictionary>(
  dict: T,
  func: (dict: T) => T
): T {
  const newDict = deepClone<T>(dict) as T;
  return func(newDict);
}
