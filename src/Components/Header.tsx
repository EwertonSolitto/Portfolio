import { WhiteBurger } from "../assets/WhiteBurger";

export default function Header () {
 
  return (
    <header>
      <a href="#main"><h1><span className="font-blue">{'<'}</span>Portfólio<span className="font-blue">{'/>'}</span></h1></a>
      <button>< WhiteBurger width={48} height={48}/></button>
    </header>
  )
}