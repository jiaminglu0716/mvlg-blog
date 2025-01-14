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
  // brandName: string;
  // product: string;
  // service: Services;
  // serviceName: string;
  // languageName: string;
  // profile: string;
  // descriptions: string;
  // certifications: Certification[];
  // customers: Customer[];
  // values: CompanyValue[];
  // coreValues: CompanyCoreValue[];
  // contacts: Contact[];
  // navigation: NavigationLink[];
  // footer: Footer;
  // translations: Translations;
  // timezone: "GMT";
};
