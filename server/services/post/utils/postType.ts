import { Dictionary } from "revt-toolkit";
import { addNeedFields, fixDate } from ".";
import { imageLink } from "../../../common/utils/link";
import { CommonPost } from "../domain/Post/CommonPost";
import { GalgameReviewPost } from "../domain/Post/GalgameReviewPost";
import { QListPost } from "../query/QListPost";
import { PostType } from "../domain/Post/PostType";
import { subUrlPath } from "../../../../lib/url";

export type CollectionPost = GalgameReviewPost | CommonPost;

export function getPostTypeByLink(link: string): PostType {
  if (/^galgame\/games\/.*?\/review$/.test(link)) {
    return PostType.GALGAME_REVIEW;
  }
  if (/^galgame\/games\/.*?\/records\/.*?/.test(link)) {
    return PostType.GALGAME_RECORD;
  }
  if (link.startsWith("record")) {
    return PostType.RECORD;
  }
  return PostType.POST;
}

export function getPostImageLinkByType(
  type: PostType,
  postLink: string,
  link: string
): string {
  if (!link) return link;
  switch (type) {
    case PostType.POST:
      return imageLink(link);
    case PostType.GALGAME_REVIEW:
      return imageLink(`/images/galgame${subUrlPath(postLink, 1, 2)}/${link}`);
    case PostType.GALGAME_RECORD:
      return imageLink(link);
    case PostType.RECORD:
      return imageLink(link);
  }
}

export function getCommonPost(
  link: string,
  metas: Dictionary,
  data: string
): CommonPost {
  const coverLink = getPostImageLinkByType(PostType.POST, link, metas?.cover);

  return CommonPost.post()
    .content(data)
    .slugs(link.substring(0).split("/"))
    .link(link)
    .date(fixDate(metas?.date))
    .title(metas?.title)
    .author(metas?.author)
    .excerpt(metas?.excerpt)
    .star(metas?.star)
    .tags(metas?.tags)
    .cover(coverLink);
}

export function getGalgameReviewPost(
  link: string,
  metas: Dictionary,
  data: string
): GalgameReviewPost {
  const coverLink = getPostImageLinkByType(
    PostType.GALGAME_REVIEW,
    link,
    metas?.cover
  );

  return GalgameReviewPost.post()
    .content(data)
    .slugs(link.substring(0).split("/"))
    .link(link)
    .date(fixDate(metas?.date))
    .title(metas?.title)
    .author(metas?.author)
    .excerpt(metas?.excerpt)
    .star(metas?.star)
    .tags(metas?.tags)
    .cover(coverLink)
    .meta(metas?.meta)
    .playrecs(metas?.playrecs)
    .reviews(metas?.reviews);
}

export function getGalgameRecordPost(
  link: string,
  metas: Dictionary,
  data: string
) {
  return null;
}

export function getCommonRecordPost(
  link: string,
  metas: Dictionary,
  data: string
) {
  return null;
}

export function getPostByType(
  type: PostType,
  link: string,
  metas: Dictionary,
  data: string
): CollectionPost {
  switch (type) {
    case PostType.POST:
      return getCommonPost(link, metas, data);
    case PostType.GALGAME_REVIEW:
      return getGalgameReviewPost(link, metas, data);
    case PostType.GALGAME_RECORD:
      return getGalgameRecordPost(link, metas, data);
    case PostType.RECORD:
      return getCommonRecordPost(link, metas, data);
  }
}

export function getPostByData(post: QListPost): CollectionPost {
  switch (post.type) {
    case PostType.POST:
      return CommonPost.post().load(post);
    case PostType.GALGAME_REVIEW:
      return GalgameReviewPost.post().load(post);
    case PostType.GALGAME_RECORD:
      return null;
    case PostType.RECORD:
      return null;
  }
}

export function getPostExFieldsByType(
  type: PostType,
  fields?: string[]
): string[] {
  if (!fields) return;

  const postFields = [...fields];

  if (type == PostType.GALGAME_REVIEW) {
    addNeedFields(postFields, ["type", "meta"]);
  }

  return postFields;
}
