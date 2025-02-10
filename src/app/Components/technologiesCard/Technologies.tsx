'use client'

import TechnologyList from "./technologyList/TechnologyList"

import useAppContext from '@hook/useAppContext';

import portugueseData from '@json/portuguese/technologies.json';
import englishData from '@json/english/technologies.json';
import PrintTechnologyList from "./technologyList/PrintTechnologyList";

export default function Technologies() {
  const { isPortuguese } = useAppContext()
  const technologiesData = isPortuguese ? portugueseData : englishData

  return (
    <section className="technologies">
      <div className="card list-card left">
      
        <h2>{technologiesData.title}</h2>
  
        {PrintTechnologyList(technologiesData.lists)}
  
      </div>
    </section>
  )
}