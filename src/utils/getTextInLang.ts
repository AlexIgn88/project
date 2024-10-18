import { LangObjectType, DictionaryType } from "../types";

const getCurrentDictionary: (
  currentLanguageObject: LangObjectType,
) => DictionaryType = (currentLanguageObject) =>
  currentLanguageObject.dictionary;

export const getTextInLang = (
  text: string,
  currentLanguageObject: LangObjectType,
) => {
  return getCurrentDictionary(currentLanguageObject)[text] || text;
};
