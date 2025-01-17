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
    language: "语言",
    init: "初始化",
    search: {
      on: "搜索功能",
      countdown: "搜索关闭倒计时",
      gaptime: "搜索间隔计时",
    },
  },
  stat: {
    posts: "博客",
    stars: "收藏",
    tags: "标签",
  },
  homepage: {
    data: [
      {
        title: "基础服务",
        modules: [
          { title: "主页", link: "/home", desc: "> 返回主页" },
          {
            title: "文档",
            link: "/posts",
            desc: "> 文档查找列表",
          },
          {
            title: "归档",
            link: "/archives",
            desc: "> 根据创建日期进行归档",
          },
          { title: "标签", link: "/tags", desc: "> 全部标签" },
          {
            title: "共享网站",
            link: "/links",
            desc: "> 根据网站类型分类并分享网站",
          },
          {
            title: "设置中心",
            link: "/setting",
            desc: "> 重新配置网站属性",
          },
          { title: "联系方式", link: "/", desc: "> 联络地址" },
        ],
      },
      {
        title: "功能服务",
        modules: [
          {
            title: "Revt",
            link: "/home",
            desc: "> 统计",
          },
        ],
      },
    ],
  },
  tagspage: {
    title: "全部标签",
    noTagsText: "暂未检索到任何标签",
  },
};

export default withContext(service);
