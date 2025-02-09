import { QCountTag } from "../../post/query/QCountTagList";
import { QListPost } from "../../post/query/QListPost";
import { QListTag } from "../../post/query/QListTag";
import { QPostStats } from "../../post/query/QPostStat";

export type QLayoutData = {
  posts: QListPost[];
  tags: QListTag[];
  archives: ArchiveLinkY1M;
  stat: QPostStats;
  toptags: QCountTag[];
  profile: {
    name: string;
    avatar: string;
    sns: { type: string; link: string }[];
  };
};
