
import i18n from "i18next";
import Backend from 'i18next-http-backend'
import languageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
i18n
  .use(Backend).use(languageDetector).use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    backend: {
      //translate file path
      loadPath: '/assets/i18n/{{ns}}/{{lng}}.json',
    },
    
    fallbackLng: "en",
    debug: false,
    //namespaces for different pages
    ns: ["common", "home", "login", "register", "product", "productlist", "cart"],

    interpolation: {
      escapeValue: false,
      formatSeparator:true // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    react: {
      wait:true,
    },
  });

  export default i18n;  