'use client'

import Image from "next/image";

import PrintProjectType from "./PrintProjectType";
import PrintTopTechnologies from "./PrintTopTechnologies";
import PrintTechnologyFigures from "./PrintTechnologyFigures";
import PrintLinks from "./PrintLinks";

import useAppContext from "@hook/useAppContext";

import CardProps from "@models/props/CardProps";



export default function Card({
  title, 
  description,
  imageSrc, 
  projectType, 
  technologies, 
  links
}: CardProps) {
  const { isPortuguese } = useAppContext()

  return (
    <li className='project-card'>
      <div className='top-card'>

        <h3>{title}</h3>

        <ul className='top-technology-list'>
          {PrintTopTechnologies(technologies)}
        </ul>

      </div>
      
      <div className='img-card'>

        <Image src={imageSrc} alt='foto' width={448} height={292}/>

      </div>
      <div className='bottom-img'>
        {PrintProjectType(projectType)}
      </div>

      <div className='description'>

        <h4>{isPortuguese ? "Sobre" : "About"}:</h4>
        <p>{isPortuguese ? description.portuguese : description.english}</p>

      </div>

      <div className="technologies">

        <h4>{isPortuguese ? "Tecnologias" : "Technologies"}:</h4>
        <ul>
          {PrintTechnologyFigures(technologies)}
        </ul>

      </div>
      
      <div className='link-buttons'>
        {PrintLinks(links)}
      </div>
    </li>
  )
}