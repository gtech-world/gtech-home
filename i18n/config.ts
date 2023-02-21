import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enCommon from './en/common.json';
import zhCommon from './zh/common.json';
import enHome from './en/home.json';
import zhHome from './zh/home.json';
import enWeb3 from './en/solutions/web3.json';
import zhWeb3 from './zh/solutions/web3.json';
import enGovernance from './en/solutions/governance.json';
import zhGovernance from './zh/solutions/governance.json';
import enAutomotive from './en/solutions/automotive.json';
import zhAutomotive from './zh/solutions/automotive.json';

export const resources = {
  en: {
    common : enCommon,
    home : enHome,
    web3 : enWeb3,
    governance : enGovernance,
    automotive : enAutomotive,
  },
  zh: {
    common : zhCommon,
    home : zhHome,
    web3 : zhWeb3,
    governance : zhGovernance,
    automotive: zhAutomotive
  }
};

i18next.use(initReactI18next).init({
  lng: 'zh',
  debug: true,
  resources,
});