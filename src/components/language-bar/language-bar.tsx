import LangSelect from "../lang-select";
import styles from "./language-bar.module.css";
import { Flex } from "antd";
import CountryFlag from "../country-flag";

const LanguageBar = () => {
  return (
    <Flex className={styles.LanguageBar}>
      <CountryFlag />
      <LangSelect />
    </Flex>
  );
};

export default LanguageBar;
