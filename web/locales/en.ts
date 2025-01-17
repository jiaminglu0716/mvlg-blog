import withContext from "../contexts/withContext";
import { ServiceConfig } from "../interfaces/service";

export const service: ServiceConfig = {
  lang: "en",
  locale: "en",
  language: "Language",
  tag: "Tag",
  datetime: {
    year: "Year",
  },
  setting: {
    title: "Settings",
    save: "Save",
    language: "Language",
    init: "Init",
    search: {
      on: "On Search",
      countdown: "Search Finish Countdown",
      gaptime: "Search Gap Time",
    },
  },
  stat: {
    posts: "posts",
    stars: "stars",
    tags: "tags",
  },
  homepage: {
    data: [
      {
        title: "Basic",
        modules: [
          { title: "Home", link: "/home", desc: "> back to home" },
          {
            title: "Post",
            link: "/posts",
            desc: "> list all posts with table list",
          },
          {
            title: "Archive",
            link: "/archives",
            desc: "> list posts with timeline diagram",
          },
          { title: "Tag", link: "/tags", desc: "> show all tags in posts" },
          {
            title: "Links",
            link: "/links",
            desc: "> list some links we recommanded according to categories",
          },
          {
            title: "Setting",
            link: "/setting",
            desc: "> reset website default settings",
          },
          { title: "Cover", link: "/", desc: "> back to root profile" },
        ],
      },
      {
        title: "Service",
        modules: [
          {
            title: "Revt",
            link: "/home",
            desc: "> statistic with quick note text",
          },
        ],
      },
    ],
  },
  tagspage: {
    title: "Tags",
    noTagsText: "No tags yet :/",
  },
};

export default withContext(service);
