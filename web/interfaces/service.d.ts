export type ServiceConfig = {
  lang: string;
  locale: string;
  brandName: string;
  product: string;
  service: Services;
  serviceName: string;
  languageName: string;
  profile: string;
  descriptions: string;
  certifications: Certification[];
  customers: Customer[];
  values: CompanyValue[];
  coreValues: CompanyCoreValue[];
  contacts: Contact[];
  navigation: NavigationLink[];
  footer: Footer;
  translations: Translations;
  timezone: "GMT";
};
