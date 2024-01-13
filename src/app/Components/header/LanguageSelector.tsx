'use client'
import { CaretDown } from "@phosphor-icons/react/dist/ssr"
import { useState } from "react"

export default function LanguageSelector() {
  const [openedSelector, setOpenedSelector] = useState(false)
  const [languageSelected, setLanguageSelected] = useState(navigator.language.includes('pt'))

  function handleLanguage(language: string | null) {
    switch(language) {
      case 'portuguese':
        setLanguageSelected(true)
        break
      case 'english':
        setLanguageSelected(false)
        break
    }
    setOpenedSelector(false)
  }
  
  return (
    <div className="select-div">
      <div className="desktop-language-selector">
        <button className="language-selector-button" onClick={() => {setOpenedSelector(!openedSelector)}}>
          <div>
            <span>{languageSelected ? 'Português' : 'Inglês'}</span>
          </div>
          <CaretDown color="#E8E8E8" size={20} weight="duotone" />
        </button>
        <ul className={`selector-options ${openedSelector ? 'opened' : ''}`}>
            <li>
              <button onClick={() => {handleLanguage('portuguese')}}>Português</button>
            </li>
            <li>
              <button onClick={() => {handleLanguage('english')}}>Inglês</button>
            </li>
          </ul>
      </div>
      <select name="language" id="language" onChange={(e) => {handleLanguage(e.target.value)}} value={languageSelected ? 'português' : 'english'}>
        <option className="option" value="portuguese">Português</option>
        <option className="option" value="english">Inglês</option>
      </select>
    </div>
  )
}