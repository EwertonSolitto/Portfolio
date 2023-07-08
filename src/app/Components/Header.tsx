'use client'
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";

export default function Header () {
  const [nav, setNav] = useState(false)

  const logo = <a href="#main"><h1><span className="font-blue">{'<'}</span>Portfólio<span className="font-blue">{'/>'}</span></h1></a>
  const burgerButton = <button onClick={() => handleMenu(true)}className="burger"><List size={48} color="#e8e8e8" weight="regular" /></button>
  const xButton = <button onClick={() => handleMenu(false)} className="x"><X size={48} color="#e8e8e8" weight="regular" /></button>
  const navigation = 
  (
    <div className="opened-nav">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Sobre</a></li>
          <li><a href="/">Habilidades</a></li>
          <li><a href="/">Projetos</a></li>
          <li><a href="/">Contato</a></li>
        </ul>
      </nav>
    </div>
  )
  const select = 
  (  
    <div className="select-div">
      <select name="language" id="language">
        <option className="option" value="portuguese">Português</option>
        <option className="option" value="english">Inglês</option>
      </select>
    </div>
  )

  function handleMenu(option: boolean) {
    setNav(option)
    window.scroll(0, 0)
    return nav ? document.body.style.position = 'relative' : document.body.style.position = 'fixed'
  }

  /*if (document.body.clientWidth >= 840) {
    return (
      <header>
        <div className='header-logo-button'>
          <a href="#main"><h1><span className="font-blue">{'<'}</span>Portfólio<span className="font-blue">{'/>'}</span></h1></a>
        </div>
        {navigation}
        <div className="selector"></div>
      </header>
    )
  }*/

  return (
    <header className={nav ? 'opened-menu' : ''}>
        <div className='header mobile-header'>
          {logo}
          {nav ? xButton : burgerButton}
          {navigation}
          {select}
        </div>
        <div className='header desktop-header'>
          {logo}
          {navigation}
          {select}
        </div>
    </header>
  )
}