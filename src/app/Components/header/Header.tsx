'use client'
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import Logo from "../Logo";
import useAppContext from "../../hook/useAppContext";
import LanguageSelector from "./LanguageSelector";

export default function Header () {
  const [showMenu, setShowMenu] = useState(false)
  const {handleMenuButtonOpened, menuButtonOpened} = useAppContext()

  const handleMenu = () => {
    setShowMenu(!showMenu)
    handleMenuButtonOpened()
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
            <nav>
              <ul>
                <li><a href="#home" onClick={() => setShowMenu(false)}>Home</a></li>
                <li><a href="#sobre" onClick={() => setShowMenu(false)}>Sobre</a></li>
                <li><a href="#habilidades" onClick={() => setShowMenu(false)}>Habilidades</a></li>
                <li><a href="#projetos" onClick={() => setShowMenu(false)}>Projetos</a></li>
                <li><a href="#contato" onClick={() => setShowMenu(false)}>Contato</a></li>
              </ul>
            </nav>

            <LanguageSelector />
          </div>
        </div>
    </header>
  )
}