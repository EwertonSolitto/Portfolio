import useAppContext from "@hook/useAppContext"

import NavigationProps from "@models/props/NavigationProps";

import portugueseData from '@json/portuguese/navigation.json';
import englishData from '@json/english/navigation.json';

export default function Navigation({tIndex, onClick}: NavigationProps) {
  const { isPortuguese } = useAppContext()
  const navigationData = isPortuguese ? portugueseData : englishData
  
  return (
    <nav className="links">
        {
          <ul>
            {navigationData.navigation.map(({content, link}, index) => {
                return (
                  <li key={index}>
                    <a href={link} tabIndex={tIndex} onClick={onClick}>{content}</a>
                  </li>
                )
              })}
          </ul>
        }
    </nav>
  )
}