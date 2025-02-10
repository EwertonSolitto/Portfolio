'use client'

import { useEffect, useState } from "react";

import checkScreenSizeToChangeTabIndex from "./checkScreenSizeToChangeTabIndex";
import handleTabNav from "./handleTabNav";
import ShowMenuHandler from "./ShowMenuHandler";

import HeaderButton from "./HeaderButton";
import LanguageSelector from "./languageSelector/LanguageSelector";
import Logo from "../Logo";
import Navigation from "../navigation/Navigation";

import useAppContext from "@hook/useAppContext";

import TabIndex from "@models/types/TabIndex";

export default function Header () {
  const [showMenu, setShowMenu] = useState(false)
  const [tabNav, setTabNav] = useState<TabIndex>(0)
  const {handleMenuButtonOpened, menuButtonOpened} = useAppContext()

  useEffect(() => {
    setTabNav(checkScreenSizeToChangeTabIndex())
  }, [setTabNav])

  function handleMenu() {
    setShowMenu(!showMenu)
    handleMenuButtonOpened()
    handleTabNav(tabNav, setTabNav)
  }

  return (
    <header className={showMenu ? 'opened-menu' : ''}>
        <div className='header'>
            <a href="#home" className="logo" onClick={() => {setShowMenu(false)}} tabIndex={menuButtonOpened}>
            <h1 aria-label="Ewerton Solitto"><Logo /></h1>
          </a>

          <HeaderButton handler={handleMenu} >
            {ShowMenuHandler(showMenu)}
          </HeaderButton>
          
          <div className="opened-nav">
            <Navigation 
              onClick={handleMenu} 
              tIndex={tabNav}
            />

            <LanguageSelector tabNavigation={tabNav} />
          </div>
        </div>
    </header>
  )
}