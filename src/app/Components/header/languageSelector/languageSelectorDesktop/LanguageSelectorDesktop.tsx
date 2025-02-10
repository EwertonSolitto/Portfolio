import { CaretDown } from "@phosphor-icons/react"

import PrintLanguageOptionsDesktop from "./PrintLanguageOptionsDesktop";

import useAppContext from "@hook/useAppContext"

import LanguageSelectorDesktopProps from "@models/props/LanguageSelectorDesktopProps"

import portugueseData from '@json/portuguese/languageSelector.json';
import englishData from '@json/english/languageSelector.json';


export default function LanguageSelectorDesktop({
  handleSelector, 
  openedSelector, 
  runLanguageHandler
}: LanguageSelectorDesktopProps) {
  const { isPortuguese } = useAppContext()
  const languageSelectorData = isPortuguese ? portugueseData : englishData

  return (
    <div className="desktop-language-selector">
      <button className="language-selector-button" onClick={handleSelector}>
        <div>
          <span>{languageSelectorData.currentLanguage}</span>
        </div>
        <CaretDown color="#E8E8E8" size={20} weight="duotone" />
      </button>
      <ul className={`selector-options ${openedSelector ? 'opened' : ''}`}>
          {PrintLanguageOptionsDesktop(languageSelectorData.languageOptions, runLanguageHandler)}
        </ul>
    </div>
  )
}