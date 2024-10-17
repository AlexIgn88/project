import { createContext, useState } from "react";
import { initialStateLang } from "../language-pack/language-data";

const LanguageContext = createContext({} as any);

const LanguageContextProvider = ({ children }: any) => {
  const [lang, setLang] = useState(initialStateLang);
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageContextProvider };
