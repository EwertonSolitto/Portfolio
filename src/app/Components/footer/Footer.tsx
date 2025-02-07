'use client'

import FooterTop from "./FooterTop";
import Navigation from "../navigation/Navigation";

import useAppContext from "@hook/useAppContext";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Footer() {
  const { menuButtonOpened } = useAppContext()
  
  return(
    <footer>
      <FooterTop />

      <div className="footer-line"></div>

      <div className="footer-bottom">

        <Navigation tIndex={menuButtonOpened} />
        
        <SocialMediaLinks />

      </div>
    </footer>
  )
}