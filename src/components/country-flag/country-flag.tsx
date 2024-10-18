import { useLanguageObject } from "../../custom-hooks/use-language-object";

const CountryFlag = () => {
  const currentLanguageObject = useLanguageObject();
  const Flag = currentLanguageObject.flag;
  return Flag;
};

export default CountryFlag;
