'use client'
import languageChecker from "./languageChecker"
import useAppContext from "@hook/useAppContext"
import { CaretDown } from "@phosphor-icons/react/dist/ssr"
import { useEffect, useState } from "react"

export default function LanguageSelector() {
  const [openedSelector, setOpenedSelector] = useState(false)
  const {isPortuguese, setIsPortuguese} = useAppContext()

  useEffect(() => {
      setIsPortuguese(languageChecker())
  }, [setIsPortuguese])

  function handleLanguage(language: string | null) {
    switch(language) {
      case 'portuguese':
        setIsPortuguese(true)
        break
      case 'english':
        setIsPortuguese(false)
        break
    }
    setOpenedSelector(false)
  }
  
  return (
    <div className="select-div">
      <div className="desktop-language-selector">
        <button className="language-selector-button" onClick={() => {setOpenedSelector(!openedSelector)}}>
          <div>
            <span>{isPortuguese ? '🇧🇷 Português' : '🇺🇸 English'}</span>
          </div>
          <CaretDown color="#E8E8E8" size={20} weight="duotone" />
        </button>
        <ul className={`selector-options ${openedSelector ? 'opened' : ''}`}>
            <li>
              <button onClick={() => {handleLanguage('portuguese')}}>🇧🇷 {isPortuguese ? "Português" : "Portuguese"}</button>
            </li>
            <li>
              <button onClick={() => {handleLanguage('english')}}>🇺🇸 {isPortuguese ? "Inglês" : "English"}</button>
            </li>
          </ul>
      </div>
      <select name="language" id="language" onChange={(e) => {handleLanguage(e.target.value)}} value={isPortuguese ? 'português' : 'english'}>
        <option className="option" value="portuguese">{isPortuguese ? "🇧🇷 Português" : "🇧🇷 Portuguese"}</option>
        <option className="option" value="english">{isPortuguese ? "🇺🇸 Inglês" : "🇺🇸 English"}</option>
      </select>
    </div>
  )
}