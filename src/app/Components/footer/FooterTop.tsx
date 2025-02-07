import Logo from "../Logo"

import useAppContext from "@hook/useAppContext"

import portugueseData from '@json/portuguese/footerTop.json';
import englishData from '@json/english/footerTop.json';

export default function FooterTop() {
  const { isPortuguese } = useAppContext()
  const { text } = isPortuguese ? portugueseData : englishData

  return (
    <div className="footer-top">
      <h2 className="logo" aria-label="Ewerton Solitto"><Logo /></h2>
      <p>{text}</p>
    </div>
  )
}