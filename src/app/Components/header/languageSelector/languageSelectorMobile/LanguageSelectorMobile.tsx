import useAppContext from "@hook/useAppContext"

import PrintLanguageOptionsMobile from "./PrintLanguageOptionsMobile";

import LanguageSelectorMobileProps from "@models/props/LanguageSelectorMobile"

import portugueseData from '@json/portuguese/languageSelector.json';
import englishData from '@json/english/languageSelector.json';

export default function LanguageSelectorMobile({tabNavigation, handleLanguage}: LanguageSelectorMobileProps) {
  const { isPortuguese } = useAppContext()
  const languageSelectorData = isPortuguese ? portugueseData : englishData
  
  return (
    <select 
        name="language" 
        id="language" 
        onChange={(e) => {handleLanguage(e.target.value)}}
        value={isPortuguese ? 'portugues' : 'english'}
        tabIndex={tabNavigation}
      >
        {PrintLanguageOptionsMobile(languageSelectorData.languageOptions)} 
      </select>
  )
}