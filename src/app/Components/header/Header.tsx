'use client'

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";

import checkScreenSizeToChangeTabIndex from "./checkScreenSizeToChangeTabIndex";

import LanguageSelector from "./languageSelector/LanguageSelector";

import Logo from "../Logo";
import Navigation from "../navigation/Navigation";

import useAppContext from "@/hook/useAppContext";
import TabIndex from "@/models/types/TabIndex";

export default function Header () {
  const [showMenu, setShowMenu] = useState(false)
  const [tabNav, setTabNav] = useState<TabIndex>(0)
  const {handleMenuButtonOpened, menuButtonOpened} = useAppContext()

  useEffect(() => {
    setTabNav(checkScreenSizeToChangeTabIndex())
  }, [setTabNav])

  function handleMenu() {
    setShowMenu(!showMenu)
    handleTabNav()
  }

  function handleTabNav() {
    handleMenuButtonOpened()
    if(tabNav === 0) {
      setTabNav(-1)
    } else {
      setTabNav(0)
    }
  }

  const burgerButton = <button onClick={() => handleMenu()} className="burger"><List size={48} color="#e8e8e8" weight="regular" aria-label="Abrir menu" /></button>

  const xButton = <button onClick={() => handleMenu()} className="x"><X size={48} color="#e8e8e8" weight="regular" aria-label="Fechar menu"/></button>

  return (
    <header className={showMenu ? 'opened-menu' : ''}>
        <div className='header'>
          <a href="#home" className="logo" onClick={() => {setShowMenu(false)}} tabIndex={menuButtonOpened}>
            <h1 aria-label="Ewerton Solitto"><Logo /></h1>
          </a>
          
          {showMenu ? xButton : burgerButton}
          
          <div className="opened-nav">
            <Navigation onClick={handleMenu} 
            tIndex={tabNav}
          />

            <LanguageSelector tabNavigation={tabNav} />
          </div>
        </div>
    </header>
  )
}