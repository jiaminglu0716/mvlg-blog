export function getDayDate(date: Date): Date {
  return new Date(date.toLocaleDateString());
}

export function getDayTimestamp(date: Date): number {
  return getDayDate(date).getTime();
}
