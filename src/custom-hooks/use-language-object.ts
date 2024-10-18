import { useContext } from "react";
import { LanguageContext } from "../contexts/language";
import { LangObjectType } from "../types";

export const useLanguageObject: () => LangObjectType = () => {
  const { lang } = useContext(LanguageContext),
    currentLang = lang.currentLang;
  return lang.lang[currentLang];
};
