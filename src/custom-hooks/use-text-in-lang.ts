import { useContext } from "react";
import { LanguageContext } from "../contexts/language";
import { LangObjectType } from "../types";

export const useLanguageObject: () => any = () => {
  const { lang } = useContext(LanguageContext),
    currentLang = lang.currentLang,
    currentLanguageObject = lang.lang[currentLang];
  return currentLanguageObject;
};

export const getTextInLang = (
  text: string,
  currentLanguageObject: LangObjectType,
) => {
  return currentLanguageObject.dictionary[text];
};
