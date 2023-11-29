'use client'
import { ProjectFigureProps } from "@/app/models/interfaces";
import { CaretRight } from "@phosphor-icons/react";
import Image from "next/image";

export function ProjectFigure(props: ProjectFigureProps) {
  const {title, img, alt, tecnologies, links, style} = props

  const tecnologyList = tecnologies.map((tecnology, index) => {
    return <li key={index}>{tecnology}</li>
  })

  return (
    <li className={`projects-figure ${style}`}>
      
      <div className="over-img">
        <h3 aria-label={`Projeto ${title}`}>{title}</h3>
        <div className="line"></div>
  
        <div className="bottom">
          <ul>
            {tecnologyList}
          </ul>
          
          
          <div className="links">
            <a href={links.github} target="_blank" className="github" aria-label="Visite Github">GitHub <CaretRight size={20} color="#0f1621" weight="bold" /></a>
            <a href={links.website} target="_blank" className="website">Visite o Site <CaretRight size={20} color="#0f1621" weight="bold" /></a>
          </div>
        </div>
        
      </div>
        <Image src={img} width={1080} height={700} alt={alt} />
    </li>
  )
}