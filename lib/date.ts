import { getNumberDigits, repeat } from "revt-toolkit";

export function getDayDate(date: Date): Date {
  return new Date(date.toLocaleDateString());
}

export function getDayTimestamp(date: Date): number {
  return getDayDate(date).getTime();
}

export function dateFormat(
  date: Date,
  format: string = "yyyy-MM-dd hh:mm:ss"
): string {
  const o: any = {
    "y{4,}": date.getFullYear(),
    "M{2,}": date.getMonth() + 1, //Month
    "d{2,}": date.getDay(), //Day
    "h{2,}": date.getHours(), //Hour
    "m{2,}": date.getMinutes(), //Minute
    "s{2,}": date.getSeconds(), //Second
  };

  for (const k in o) {
    const RE = new RegExp("(" + k + ")");

    if (RE.test(format)) {
      const value = o[k];
      const length = getNumberDigits(value);
      const matchList = format.match(RE);
      if (!matchList) return "";
      const match = matchList[0];
      const baseStr = repeat("0", match.length - length);
      const timeStr = baseStr + value;
      format = format.replace(match, timeStr);
    }
  }

  return format;
}
