import { InitialStateLangType } from "../types";
import { en, ru, cn, br, de } from "./dictionaries";
import { RU, US, CN, BR, DE } from "country-flag-icons/react/3x2";

export const initialStateLang: InitialStateLangType = {
  currentLang: "rus",
  lang: {
    eng: {
      shortName: "eng",
      langName: "English",
      dictionary: en,
      flag: <US title="USA" className="" style={{ width: "28px" }} />,
    },
    rus: {
      shortName: "rus",
      langName: "Русский",
      dictionary: ru,
      flag: <RU title="Russia" className="" style={{ width: "28px" }} />,
    },
    cn: {
      shortName: "cn",
      langName: "中文",
      dictionary: cn,
      flag: <CN title="China" className="" style={{ width: "28px" }} />,
    },
    br: {
      shortName: "br",
      langName: "Brazil",
      dictionary: br,
      flag: <BR title="Brazil" className="" style={{ width: "28px" }} />,
    },
    de: {
      shortName: "de",
      langName: "German",
      dictionary: de,
      flag: <DE title="German" className="" style={{ width: "28px" }} />,
    },
  },
};
