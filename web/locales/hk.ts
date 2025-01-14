import withContext from "../contexts/withContext";
import { ServiceConfig } from "../interfaces/service";

export const service: ServiceConfig = {
  lang: "hk",
  locale: "hk",
  language: "语言",
  tag: "标签",
  datetime: {
    year: "年份",
  },
  setting: {
    title: "设置中心",
    save: "保存",
  },
  stat: {
    posts: "博客",
    stars: "收藏",
    tags: "标签",
  },
};

export default withContext(service);
