import loadable from '@loadable/component';

const loadableConfig: {[key: string]: any} = {
  en: loadable(() => import('./en')),
  hk: loadable(() => import('./hk')),
};

export const defaultService = 'en';

export default loadableConfig;