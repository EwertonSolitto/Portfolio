'use client'

import Image from "next/image";
import { Layout } from "@phosphor-icons/react";

import PrintLinks from "./PrintLinks";
import PrintTopTechnologies from "./PrintTopTechnologies";
import PrintTechnologyFigures from "./PrintTechnologyFigures";

import useAppContext from "@hook/useAppContext";

import CardProps from "@models/props/CardProps";
import PrintProjectType from "./PrintProjectType";


export default function Card({
  title, 
  description, 
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

        <Image src={"/projects/the-blog.png"} alt='foto' width={448} height={292}/>

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