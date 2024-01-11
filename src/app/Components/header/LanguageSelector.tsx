'use client'
import { CaretDown } from "@phosphor-icons/react/dist/ssr"
import { useEffect, useRef, useState } from "react"

export default function LanguageSelector() {
  const [openedSelector, setOpenedSelector] = useState(false)
  const [languageSelected, setLanguageSelected] = useState(navigator.language.includes('pt'))
  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setOpenedSelector(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);


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
      <div className="desktop-language-selector" ref={selectorRef}>
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