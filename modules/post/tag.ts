import { cacheKeys, config, postCache } from "./config";
import { Tag } from "./model";
import { getAllPostsByFilter, getPostBySlugs, getPostSlugs } from "./post";

function addTagField(fields: string[]) {
  if (!fields.includes(config.postTagKey)) {
    fields.push(config.postTagKey);
  }
}

export function getAllPostsByTag(tag: string, fields: string[] = []) {
  addTagField(fields);

  return getAllPostsByFilter((post) => post?.tags?.includes(tag), fields);
}

export function getAllPostsByTags(tags: string[], fields: string[] = []) {
  addTagField(fields);

  return getAllPostsByFilter(
    (post) =>
      tags
        .map((tag) => post?.tags?.includes(tag))
        .reduce((prev, cur) => prev && cur),
    fields
  );
}

export function getAllTags(): Tag[] {
  const cache = postCache.get(cacheKeys.tags);

  if (!cache) {
    const tagset = new Set<string>();

    getPostSlugs()
      .map(
        (slug) => getPostBySlugs(slug, [config.postTagKey])[config.postTagKey]
      )
      .filter(
        (tags) => tags != undefined && Array.isArray(tags) && tags.length > 0
      )
      .forEach((tags) => tags.forEach((tag) => tagset.add(tag)));

    const tags: Tag[] = Array.from(tagset).map((tag) => {
      return {
        title: tag,
        link: getTagLink(tag),
      };
    });

    postCache.set(cacheKeys.tags, tags);

    return tags;
  }

  return cache;
}

export function getTagLink(tag: string): string {
  return `/${config.postTagKey}/${tag}`;
}
