export type Services = "hk" | "en";

export type ServiceConfig = {
  lang: Services;
  locale: Services;
  language: string;
  tag: string;
  datetime: {
    year: string;
  };
  setting: {
    title: string;
    save: string;
  };
  stat: {
    posts: string;
    stars: string;
    tags: string;
  };
  homepage: HomePageData;
  tagspage: TagsPageData;
};

export type HomeServiceModule = {
  title: string;
  link: string;
  desc: string;
};

export type HomeService = {
  title: string;
  modules: HomeServiceModule[];
};

export type HomePageData = {
  data: HomeService[];
};

export type TagsPageData = {
  title: string;
  noTagsText: string;
};
