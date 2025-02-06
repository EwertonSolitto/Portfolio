'use client'

import TechnologyList from "./TechnologyList"

import useAppContext from '@hook/useAppContext';

import portugueseData from '@json/portuguese/technologies.json';
import englishData from '@json/english/technologies.json';

export default function Technologies() {
  const { isPortuguese } = useAppContext()
  const technologiesData = isPortuguese ? portugueseData : englishData

  const technologyLists = technologiesData.lists.map(({title, technologies}, index) => {
    return <TechnologyList key={index} title={title} technologies={technologies} />
  })

  return (
    <div className="card list-card left">
      
    <h2>{technologiesData.title}</h2>

    {technologyLists}

    </div>
  )
}