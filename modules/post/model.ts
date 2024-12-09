export type Post = {
  slugs?: string[];
  title?: string;
  author?: string;
  link?: string;
  date?: string;
  content?: string;
  excerpt?: string;
  [key: string]: any;
};

export type Tag = {
  title?: string;
  link?: string;
  [key: string]: any;
};
