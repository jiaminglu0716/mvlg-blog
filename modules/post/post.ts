import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post } from "./model";
import { cacheKeys, config, postCache } from "./config";
import { relativeFilePaths } from "../../lib/file";
import { fixDate } from "./utils";

export function getPostSlugs(): string[][] {
  const cache = postCache.get(cacheKeys.slugs);

  if (!cache) {
    const slugs = relativeFilePaths(config.postsDirectory)
      .map((path: string) => path.replace(`${config.postsDirectory}/`, ""))
      .map((slug: string) => slug.split("/"));

    postCache.set(cacheKeys.slugs, slugs);

    return slugs;
  }

  return cache;
}

export function getPostBySlugs(slugs: string[], fields: string[] = []): Post {
  const slug = slugs.join("/");
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(config.postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const items: Post = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slugs") {
      items[field] = realSlug.split("/");
    }
    if (field === "content") {
      items[field] = content;
    }
    if (field === "link") {
      items[field] = getPostLink(realSlug);
    }
    if (typeof data[field] !== "undefined") {
      const item = data[field];
      if (field == "date") {
        items[field] = fixDate(item);
      } else {
        items[field] = item;
      }
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []): Post[] {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlugs(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export function getAllPostsByFilter(
  filter: (post: Post) => boolean,
  fields: string[] = []
): Post[] {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlugs(slug, fields))
    .filter((post) => filter(post))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export function getPostLink(slug: string) {
  return `/${config.postsDirName}/${slug}`;
}
