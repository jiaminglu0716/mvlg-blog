import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

export function distanceToNow(dateTime: number | Date) {
  return formatDistanceToNowStrict(dateTime, {
    addSuffix: true,
  });
}
