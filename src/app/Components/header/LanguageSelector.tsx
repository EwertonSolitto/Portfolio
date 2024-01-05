'use client'
import { CaretDown } from "@phosphor-icons/react/dist/ssr"
import { useState } from "react"

export default function LanguageSelector() {
  const [openedSelector, setOpenedSelector] = useState(false)
  
  return (
    <div className="select-div">
      <div className="desktop-language-selector">
        <button className="language-selector-button" onClick={() => {setOpenedSelector(!openedSelector)}}>
          <span>Português</span>
          <CaretDown color="#E8E8E8" size={20} weight="duotone" />
        </button>
        <ul className={`selector-options ${openedSelector ? 'opened' : ''}`}>
            <li>
              <button onClick={() => {setOpenedSelector(!openedSelector)}}>Português</button>
            </li>
            <li>
              <button onClick={() => {setOpenedSelector(!openedSelector)}}>Inglês</button>
            </li>
          </ul>
      </div>
      <select name="language" id="language">
        <option className="option" value="portuguese">Português</option>
        <option className="option" value="english">Inglês</option>
      </select>
    </div>
  )
}