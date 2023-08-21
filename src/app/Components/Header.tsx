'use client'
import { List, X } from "@phosphor-icons/react";
import { useReducer } from "react";

const initialState = {nav: false, section: ''}

function reducer(state: {nav: boolean}, action: string) {
  const about = document.querySelector('.about')?.getBoundingClientRect().top
  const technologies = document.querySelector('.technologies')?.getBoundingClientRect().top
  const projects = document.querySelector('.projects')?.getBoundingClientRect().top
  
  switch(action) {
    case "TRUE":
      document.body.style.position = 'fixed'
      return {...state, nav: true}
    case "FALSE":
      document.body.style.position = 'relative'
      return {...state, nav: false}
    case 'ABOUT':
      window.scrollTo({
        top: about,
        behavior: 'smooth'
      }); 
      return {...state, section: 'about'}
    case 'TECHNOLOGIES':
      window.scrollTo({
        top: technologies,
        behavior: 'smooth'
      }); 
      return {...state, section: 'technologies'}
    case 'PROJECTS':
      window.scrollTo({
        top: projects,
        behavior: 'smooth'
      }); 
      return {...state, section: 'projects'}
    default:
      return state;
  }
}

export default function Header () {
  const [states, dispatch] = useReducer(reducer, initialState)

  function toSection(section: string = '') {
    dispatch("FALSE")
    dispatch(section)
  }

  const logo = <button className="logo" onClick={() => {toSection()}}><h1><span className="font-blue">{'<'}</span>Ewerton Solitto<span className="font-blue">{'/>'}</span></h1></button>

  const burgerButton = <button onClick={() => dispatch('TRUE')} className="burger"><List size={48} color="#e8e8e8" weight="regular" /></button>

  const xButton = <button onClick={() => dispatch('FALSE')} className="x"><X size={48} color="#e8e8e8" weight="regular" /></button>

  const navigation = 
  (
    <div className="opened-nav">
      <nav>
        <ul>
          <li><button className="to-section" onClick={() => {toSection()}}>Home</button></li>
          <li><button className="to-section" onClick={() => {toSection('ABOUT')}}>Sobre</button></li>
          <li><button className="to-section" onClick={() => {toSection('TECHNOLOGIES')}}>Habilidades</button></li>
          <li><button className="to-section" onClick={() => {toSection('PROJECTS')}}>Projetos</button></li>
          <li><button className="to-section">Contato</button></li>
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

  return (
    <header className={states.nav ? 'opened-menu' : ''}>
        <div className='header mobile-header'>
          {logo}
          {states.nav ? xButton : burgerButton}
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