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
  },
  stat: {
    posts: "posts",
    stars: "stars",
    tags: "tags",
  },
};

export default withContext(service);
