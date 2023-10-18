'use client'
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import Logo from "./Logo";

export default function Header () {
  const [showMenu, setShowMenu] = useState(false)

  const burgerButton = <button onClick={() => setShowMenu(true)} className="burger"><List size={48} color="#e8e8e8" weight="regular" /></button>

  const xButton = <button onClick={() => setShowMenu(false)} className="x"><X size={48} color="#e8e8e8" weight="regular" /></button>

  return (
    <header className={showMenu ? 'opened-menu' : ''}>
        <div className='header'>
          <a href="#home" className="logo" onClick={() => {setShowMenu(false)}}>
            <h1><Logo /></h1>
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
          </div>

          <div className="select-div">
            <select name="language" id="language">
              <option className="option" value="portuguese">Português</option>
              <option className="option" value="english">Inglês</option>
            </select>
          </div>
        </div>
    </header>
  )
}