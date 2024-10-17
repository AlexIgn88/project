import { useContext } from "react";
import { LanguageContext } from "../../contexts/language";
import { InitialStateLangType, LangObjectType } from "../../types";
import styles from "./langselect.module.css";

const LangSelect = () => {
  const { lang, setLang } = useContext(LanguageContext);

  const languagesArray: LangObjectType[] = Object.values(lang.lang);

  const handleLangChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setLang((oldLang: InitialStateLangType) => ({
      ...oldLang,
      currentLang: evt.target.value,
    }));
  };

  return (
    <select
      value={lang.currentLang}
      onChange={handleLangChange}
      className={styles.langselect}
    >
      {languagesArray.map(({ shortName, langName }) => (
        <option key={langName} value={shortName}>
          {langName}
        </option>
      ))}
    </select>
  );
};

export default LangSelect;
