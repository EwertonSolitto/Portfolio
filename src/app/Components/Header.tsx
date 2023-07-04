'use client'
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";

export default function Header () {
  const [nav, setNav] = useState(false)

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
        </ul>
      </nav>
    </div>
  )

  function handleMenu(option: boolean) {
    setNav(option)
    window.scroll(0, 0)
    return nav ? document.body.style.position = 'relative' : document.body.style.position = 'fixed'
  }

  return (
    <header className={nav ? 'opened-menu' : ''}>
        <div className='header-logo-button'>
          <a href="#main"><h1><span className="font-blue">{'<'}</span>Portfólio<span className="font-blue">{'/>'}</span></h1></a>
          {nav ? xButton : burgerButton}
        </div>
        {nav ? navigation : ''}
    </header>
  )
}