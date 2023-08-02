import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enCommon from "./en/common.json";
import zhCommon from "./zh/common.json";
import enHome from "./en/home.json";
import zhHome from "./zh/home.json";
import enWeb3 from "./en/solutions/web3.json";
import zhWeb3 from "./zh/solutions/web3.json";
import enGovernance from "./en/solutions/governance.json";
import zhGovernance from "./zh/solutions/governance.json";
import enAutomotive from "./en/solutions/automotive.json";
import zhAutomotive from "./zh/solutions/automotive.json";
import enContact from "./en/contact.json";
import zhContact from "./zh/contact.json";

export const resources = {
  en: {
    common: enCommon,
    home: enHome,
    contact: enContact,
    web3: enWeb3,
    governance: enGovernance,
    automotive: enAutomotive,
  },
  zh: {
    common: zhCommon,
    home: zhHome,
    contact: zhContact,
    web3: zhWeb3,
    governance: zhGovernance,
    automotive: zhAutomotive,
  },
};

export const setLngConfig = (lng: string) => {
  i18next.use(initReactI18next).init({
    lng,
    // debug: true,
    resources,
  });
};
