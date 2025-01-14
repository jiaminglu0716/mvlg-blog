export type SNSType =
  | "telegram"
  | "whatsapp"
  | "instagram"
  | "facebook"
  | "twitter"
  | "github"
  | "rss"
  | "wechat"
  | "qq"
  | "tiktok"
  | "other";

export type SNSLinkType = {
  type: SNSType;
  link: string;
};

export type ProfileType = {
  name: string;
  avatar: string;
  sns?: SNSLinkType[];
};

export type ShareLinkType = {
  title: string;
  link: string;
};

export type PostType = {
  slugs?: string;
  title?: string;
  author?: string;
  link?: string;
  date?: string;
  content?: string;
  excerpt?: string;
  tags?: TagType[];
  star?: boolean;
  cover?: string;
  href?: string;
};

export type TagType = {
  title: string;
  href: string;
};

export type TagCountType = TagType & {
  count: number;
};

export type PostStat = {
  posts: number;
  tags: number;
  stars: number;
};

export type LayoutDataType = {
  posts: PostType[];
  tags: TagType[];
  archives: any;
  stat: PostStat;
  toptags: TagCountType[];
  profile: {
    name: string;
    avatar: string;
    sns: { type: string; link: string }[];
  };
};
