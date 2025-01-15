import { deepClone, Dictionary, mkpath, path } from "revt-toolkit";

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

export function updatedDictPipe<T extends Dictionary>(
  dict: T,
  value: any,
  ...paths: any[]
): T {
  mkpath([...paths], dict, value);
  return dict;
}

export function diffExecDict<T extends Dictionary>(
  dict1: T,
  dict2: T,
  exec: (key: string, dict1: T, dict2: T) => void
) {
  for (const key in dict1) {
    if (dict1[key] != dict2[key]) {
      exec(key, dict1, dict2);
    }
  }
}
