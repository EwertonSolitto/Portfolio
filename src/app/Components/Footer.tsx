'use client'

import Image from "next/image";

import Logo from "./Logo";
import LinkButton from "./LinkButton";

import useAppContext from "@hook/useAppContext";

import portugueseData from '@json/portuguese/navigation.json';
import englishData from '@json/english/navigation.json';

export default function Footer() {
  const { menuButtonOpened, isPortuguese } = useAppContext()
  const navigationData = isPortuguese ? portugueseData : englishData

  const nav = (
    <nav className="links">
        {
          <ul>
            {navigationData.navigation.map(({content, link}, index) => {
                return (
                  <li key={index}>
                    <a href={link} tabIndex={menuButtonOpened}>{content}</a>
                  </li>
                )
              })}
          </ul>
        }
    </nav>
  )
  
  return(
    <footer>
      <div className="footer-top">
        <h2 className="logo" aria-label="Ewerton Solitto"><Logo /></h2>
        <p>{isPortuguese ? '©Todos os Direitos Reservados' : "©All rights reserved"}</p>
      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">
        {nav}
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