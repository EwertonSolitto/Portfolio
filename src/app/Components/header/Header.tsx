'use client'
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import Logo from "../Logo";
import useAppContext from "@/hook/useAppContext";
import LanguageSelector from "./LanguageSelector";
import portugueseData from '@json/portuguese/navigation.json';
import englishData from "@json/english/navigation.json"

export default function Header () {
  const [showMenu, setShowMenu] = useState(false)
  const {handleMenuButtonOpened, menuButtonOpened, isPortuguese} = useAppContext()

  const navigationData = isPortuguese ? portugueseData : englishData

  const handleMenu = () => {
    setShowMenu(!showMenu)
    handleMenuButtonOpened()
  }

  const burgerButton = <button onClick={() => handleMenu()} className="burger"><List size={48} color="#e8e8e8" weight="regular" aria-label="Abrir menu" /></button>

  const xButton = <button onClick={() => handleMenu()} className="x"><X size={48} color="#e8e8e8" weight="regular" aria-label="Fechar menu"/></button>

  const nav = (
    <nav>
        {
          <ul>
            {navigationData.navigation.map(({content, link}, index) => {
                return (
                  <li key={index}>
                    <a href={link} onClick={() => handleMenu()}>{content}</a>
                  </li>
                )
              })}
          </ul>
        }
    </nav>
  )

  return (
    <header className={showMenu ? 'opened-menu' : ''}>
        <div className='header'>
          <a href="#home" className="logo" onClick={() => {setShowMenu(false)}} tabIndex={menuButtonOpened}>
            <h1 aria-label="Ewerton Solitto"><Logo /></h1>
          </a>
          
          {showMenu ? xButton : burgerButton}
          
          <div className="opened-nav">
            {nav}

            <LanguageSelector />
          </div>
        </div>
    </header>
  )
}