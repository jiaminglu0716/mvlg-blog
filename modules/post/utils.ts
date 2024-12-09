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
