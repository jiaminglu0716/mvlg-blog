export function fixPostDate(post) {
  const date = post?.date;
  if (date && typeof date === "object") {
    post.date = fixDate(date);
  }
  return post;
}

export function fixDate(date) {
  if (typeof date === "object") {
    return (date as Date).toString();
  }
  return date;
}

export function addNeedField(fields: string[], needField: string) {
  if (!fields.includes(needField)) {
    fields.push(needField);
  }
}

export function addNeedFields(fields: string[], needFields: string[]) {
  needFields.forEach((needField: string) => addNeedField(fields, needField));
}
