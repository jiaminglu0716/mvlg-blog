import withContext from "../contexts/withContext";
import { ServiceConfig } from "../interfaces/service";

export const service: ServiceConfig = {
  lang: "hk",
  locale: "hk",
  brandName: "ISGOHK",
  product: "ISGOHK官方網站",
  service: "hk",
  serviceName: "繁體中文",
  languageName: "繁體中文",
  timezone: "GMT",
  profile:
    "ISGO Technology Trading (Hong Kong) Company Limited is a comprehensive technology company which specializes in the process of curved surface printing.",
  descriptions:
    "ISGO Technology Trading (Hong Kong) Company Limited is a comprehensive technology company which specializes in the process of curved surface printing. We are focusing on the manufacture of machinery and equipment,  and the development, production and sales of environmentally friendly printing consumables. We have our own factory and production line located in Shunde, Guangdong. We aim to make the (new) minimum order to help you, whether you are a big or small brand, to pack your products in the well-designed cans.<br><br><h4><b>Our Service</b></h4><div>1. tailor-made design</div><div>2. aluminum cans printing e.g. can, milk tea cup, bottle</div>",
  certifications: [
    {
      src: "/images/cert/cert1.png",
      title: "",
    },
    {
      src: "/images/cert/cert2.png",
      title: "",
    },
    {
      src: "/images/cert/cert3.png",
      title: "",
    },
    {
      src: "/images/cert/cert4.png",
      title: "",
    },
    {
      src: "/images/cert/cert5.png",
      title: "",
    },
    {
      src: "/images/cert/cert6.png",
      title: "",
    },
  ],
  customers: [
    {
      img: "/images/client/c001-1.jpg",
      title: "Baosteel Packaging",
    },
    {
      img: "/images/client/c002-1.jpg",
      title: "COFCO",
    },
    {
      img: "/images/client/c003-1.png",
      title: "SINOPEC",
    },
    {
      img: "/images/client/c004-1.jpg",
      title: "GZSanrong",
    },
    {
      img: "/images/client/c005-1.png",
      title: "KFC",
    },
    {
      img: "/images/client/c006-1.png",
      title: "Nestle",
    },
    {
      img: "/images/client/c007-1.jpg",
      title: "Shwe Pyinann",
    },
    {
      img: "/images/client/c008-1.jpg",
      title: "Crown Color Painting",
    },
    {
      img: "/images/client/c009-1.jpg",
      title: "Coca Cola",
    },
    {
      img: "/images/client/c010-1.jpg",
      title: "广州市鸿志包装材料有限公司",
    },
    {
      img: "/images/client/c011-1.jpg",
      title: "Tubest",
    },
    {
      img: "/images/client/c012-1.jpg",
      title: "Gong Cha",
    },
    {
      img: "/images/client/c013-1.jpg",
      title: "广州美泰塑料包装有限公司",
    },
    {
      img: "/images/client/c014-1.png",
      title: "Macdonald",
    },
    {
      img: "/images/client/c015-1.jpg",
      title: "58 Degree C Milk Tea",
    },
  ],
  values: [
    {
      icon: "https://aimg8.dlssyht.cn/u/2253941/module/simplepicbackground/7837/15673836_1697868650.png?x-oss-process=image/resize,m_fixed,w_75,h_77,limit_0",
      title: "Mission",
      desc: "Our mission is to be the leading environmentally friendly aluminum can printing company, committed to providing high-quality printing solutions while being responsible for environmental protection.",
    },
    {
      icon: "https://aimg8.dlssyht.cn/u/2253941/module/simplepicbackground/7837/15673875_1697868868.png?x-oss-process=image/resize,m_fixed,w_76,h_72,limit_0",
      title: "Vision",
      desc: "Our vision is to be the best in the industry and lead the future of environmentally friendly aluminum can printing.",
    },
    {
      icon: "https://aimg8.dlssyht.cn/u/2253941/module/simplepicbackground/7837/15673902_1697868989.png?x-oss-process=image/resize,m_fixed,w_69,h_77,limit_0",
      title: "Core values",
      desc: "Environmental awareness, Excellent quality, Technological innovation and Sustainable development.",
    },
  ],
  coreValues: [
    {
      icon: "/images/icon/Icon_1.png",
      title: "核心價值",
      desc: "幫助客戶實現價值提升。",
    },
    {
      icon: "/images/icon/Icon_2.png",
      title: "核心任務",
      desc: "作爲一個擁有完整曲面膠印印刷產品生產綫供應商. 促進新時代綠色環保的工業印刷發展。",
    },
    {
      icon: "/images/icon/Icon_3.png",
      title: "構想藍圖",
      desc: "公司由具備專業與創新的團隊組成，致力於最大化客戶，雇員，股東價值利益。",
    },
  ],
  navigation: [
    {
      title: "首頁",
      url: "/hk",
    },
    {
      title: "產品中心",
      url: "/hk/product",
    },
    {
      title: "公司介紹",
      url: "/hk/about",
    },
    {
      title: "合作公司",
      subNavigation: [
        {
          title: "公司1",
          url: "/hk/partner/1",
        },
        {
          title: "公司2",
          url: "/hk/partner/2",
        },
        {
          title: "公司3",
          url: "/hk/partner/3",
        },
      ],
    },
    {
      title: "聯係方式",
      url: "/hk/contact",
    },
  ],
  contacts: [
    {
      title: "聯係電話",
      value: "+852 5985 9007",
      icon: "/images/icon/Icon_contact_phone.png",
    },
    {
      title: "公司郵箱",
      value: "...",
      icon: "/images/icon/Icon_contact_email.png",
    },
    {
      title: "公司地址",
      value: "...",
      icon: "/images/icon/Icon_contact_location.png",
    },
  ],
  translations: {
    home: "主頁",
    customers: "客戶群體",
    values: "價值理念",
    patents: "專利證書",
    recommandationProduct: "產品推薦",
  },
  footer: {
    links: [
      // {
      //   href: 'https://www.bbc.com/zhongwen/simp/institutional-38652837',
      //   text: '使用条款',
      // },
      // {
      //   href: 'https://www.bbc.com/zhongwen/simp/institutional-38652843',
      //   text: '隐私政策',
      // },
      // {
      //   href: 'https://www.bbc.com/usingthebbc/cookies/',
      //   text: 'Cookies',
      // },
      // {
      //   href: 'https://www.bbc.co.uk/zhongwen/send/u50778626',
      //   text: '联络BBC',
      // },
    ],
    copyrightText: "艾思科（香港）科技貿易有限公司 版權所有。",
  },
};

export default withContext(service);
