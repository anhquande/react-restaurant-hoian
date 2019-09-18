import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { resources } from './lang';


const missingKeyHandler = (lng, ns, key, fallbackValue) => {
  //console.warn("MISSING Translation: ", key);
};

i18n
// load translation using xhr -> see /public/locales
// learn more: https://github.com/i18next/i18next-xhr-backend
// .use(Backend)
// detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
.use(LanguageDetector)
// pass the i18n instance to react-i18next.
.use(initReactI18next)
// init i18next
// for all options read: https://www.i18next.com/overview/configuration-options
.init({
  resources,
  ns: ['commons','restaurant_menu'],
  defaultNS: 'commons',
  whitelist: ['en', 'de', 'vi', 'cn', 'jp'],
  fallbackLng: ['de', 'en'],
  debug: false,
  keySeparator: true, // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
    prefix: "{",        // make it compatible with java .properties format
    suffix: "}",         // make it compatible with java .properties format
  },
  detection: {
    order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

    // keys or params to lookup language from
    lookupQuerystring: 'lang',
    lookupCookie: 'restaurant-hoian',
    lookupLocalStorage: 'lang',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // cache user language on
    caches: ['localStorage', 'cookie'],
    excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

    // optional expire and domain for set cookie
    //cookieMinutes: 10,
    //cookieDomain: 'localhost',

    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement
  },
  missingKeyHandler: missingKeyHandler,
}).then(()=>{
    // eslint-disable-next-line no-console
    // console.log('Language init success');
    i18n.t('i18n', { lng: 'de' } ); // -> "Internationalization"
  },
  ()=>{
    // eslint-disable-next-line no-console
    // console.log('Language init failed');
  }
);

export default i18n;
