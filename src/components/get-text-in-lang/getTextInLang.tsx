import { useContext } from "react";
import { LanguageContext } from "../../contexts/language";

const GetTextInLang = ({ text }: any) => {
  const { lang } = useContext(LanguageContext),
    currentLang = lang.currentLang,
    currentLanguageObject = lang.lang[currentLang],
    translation = currentLanguageObject.dictionary[text];

  return <span>{translation}</span>;
};

export default GetTextInLang;
