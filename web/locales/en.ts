import withContext from "../contexts/withContext";
import { ServiceConfig } from "../interfaces/service";

export const service: ServiceConfig = {
  lang: "en",
  locale: "en",
  brandName: "ISGOHK",
  product: "ISGOHK Official Site",
  service: "en",
  serviceName: "English",
  languageName: "English",
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
      title: "Core Value",
      desc: "Help customers achieve value enhancement.",
    },
    {
      icon: "/images/icon/Icon_2.png",
      title: "Mission",
      desc: "Become an integrated supplier in the printing industry. Promote the printing industry into the era of green environmental protection.",
    },
    {
      icon: "/images/icon/Icon_3.png",
      title: "Vision",
      desc: "Build a professional and innovative team. Create maximum value for customers, employees and shareholders.",
    },
  ],
  navigation: [
    {
      title: "Home",
      url: "/en",
    },
    {
      title: "Product",
      url: "/en/product",
    },
    {
      title: "About Us",
      url: "/en/about",
    },
    {
      title: "Partner",
      subNavigation: [
        {
          title: "C1",
          url: "/en/partner/1",
        },
        {
          title: "C2",
          url: "/en/partner/2",
        },
        {
          title: "C3",
          url: "/en/partner/3",
        },
      ],
    },
    {
      title: "Contact Us",
      url: "/en/contact",
    },
  ],
  contacts: [
    {
      title: "Phone",
      value: "+852 5985 9007",
      icon: "/images/icon/Icon_contact_phone.png",
    },
    {
      title: "E-mail",
      value: "...",
      icon: "/images/icon/Icon_contact_email.png",
    },
    {
      title: "Address",
      value: "...",
      icon: "/images/icon/Icon_contact_location.png",
    },
  ],
  translations: {
    home: "Home",
    customers: "Customers",
    values: "Values",
    patents: "Letters patent",
    recommandationProduct: "Recommandation",
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
    copyrightText:
      "ISGO Technology Trading (Hong Kong) Company Limited. All rights reserved.",
  },
};

export default withContext(service);
