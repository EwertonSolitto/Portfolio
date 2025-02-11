'use client'

import PrintTechnologyList from "./technologyList/PrintTechnologyList";
import createTechnologyList from "./createTechnologyList";

import useAppContext from '@hook/useAppContext';

import portugueseData from '@json/portuguese/technologies.json';
import englishData from '@json/english/technologies.json';
import technologyData from '@json/technologies.json'

export default function Technologies() {
  const { isPortuguese } = useAppContext()
  const data = isPortuguese ? portugueseData : englishData

  return (
    <section className="technologies">
      <div className="card list-card left">
      
        <h2>{data.title}</h2>
  
        {PrintTechnologyList(
          createTechnologyList(
            technologyData.technologies, 
            data.technologyTitles
            )
          )
        }
  
      </div>
    </section>
  )
}