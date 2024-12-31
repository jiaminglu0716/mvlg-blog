import { ArchiveLinkY1M } from "../../post/domain/Archive";
import { QCountTagList } from "../../post/query/QCountTagList";
import { QListPost } from "../../post/query/QListPost";
import { QListTag } from "../../post/query/QListTag";
import { QPostStats } from "../../post/query/QPostStat";

export type QLayoutData = {
  posts: QListPost[];
  tags: QListTag[];
  archives: ArchiveLinkY1M;
  stat: QPostStats;
  toptags: QCountTagList;
};
