import Image from "next/image";
import Logo from "./Logo";
import LinkButton from "./LinkButton";

export default function Footer() {
  return(
    <footer>
      <div className="footer-top">
        <h2 className="logo" aria-label="Ewerton Solitto"><Logo /></h2>
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
          <LinkButton style="github" link="https://github.com/EwertonSolitto" ariaLabel="Github" content="">
            <Image src={'/technologies/github-white-logo.svg'} alt="Github logo" width={80} height={80} />
          </LinkButton>
          <LinkButton style="linkedin" link="https://www.linkedin.com/in/ewerton-solitto/" ariaLabel="Linkedin" content="">
            <Image src={'/social-media/linkedin-white-logo.svg'} alt="LinkedIn logo" width={80} height={80} />
          </LinkButton>
        </div>
      </div>
    </footer>
  )
}