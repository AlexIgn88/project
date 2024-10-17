export interface InitialStateLangType {
  currentLang: string;
  lang: LangsType;
}

export interface LangsType {
  [key: string]: LangObjectType;
}

export interface LangObjectType {
  shortName: string;
  langName: string;
  dictionary: DictionaryType;
  flag: any;
}

export interface DictionaryType {
  [key: string]: string;
}
