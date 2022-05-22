import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en/translation.json";
import vi from "./vi/translation.json";

export const translationsJson = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

const Languages = ["en", "vi"];

export const i18n = i18next
  .use(Backend)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: translationsJson,
    fallbackLng: "vi",
    debug: true,
    whitelist: Languages,
    interpolation: {
      escapeValue: false,
    },
  });
