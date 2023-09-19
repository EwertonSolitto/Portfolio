import Image from "next/image";
import Logo from "./Logo";

export default function Footer() {
  return(
    <footer>
      <div className="footer-top">
        <Logo />
        <p>©Todos os Direitos Reservados</p>
      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">
        <div className="links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
        <div className="social-media">
          <a className="github" href="https://github.com/EwertonSolitto">
            <Image src={'/technologies/github-white-logo.svg'} alt="Github logo" width={80} height={80} />
          </a>
          <a className="linkedin" href="https://www.linkedin.com/in/ewerton-solitto/">
            <Image src={'/social-media/linkedin-white-logo.svg'} alt="LinkedIn logo" width={80} height={80} />
          </a>
        </div>
      </div>
    </footer>
  )
}