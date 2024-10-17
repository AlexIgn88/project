import { useLanguageObject } from "../../custom-hooks/use-text-in-lang";

const CountryFlag = () => {
  const currentLanguageObject = useLanguageObject();
  const Flag = currentLanguageObject.flag;
  return Flag;
};

export default CountryFlag;
