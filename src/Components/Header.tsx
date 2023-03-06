import { List } from "@phosphor-icons/react";

export default function Header () {
 
  return (
    <header>
      <a href="#main"><h1><span className="font-blue">{'<'}</span>Portfólio<span className="font-blue">{'/>'}</span></h1></a>
      <button><List size={48} color="#e8e8e8" weight="regular" /></button>
    </header>
  )
}