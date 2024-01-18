'use client'
import { ProjectFigureProps } from "@models/interfaces";
import { CaretRight } from "@phosphor-icons/react";
import Image from "next/image";
import LinkButton from "../LinkButton";
import useAppContext from "@/hook/useAppContext";

export function ProjectFigure(props: ProjectFigureProps) {
  const {title, img, alt, tecnologies, links} = props
  const { isPortuguese } = useAppContext()

  const RightRow = <CaretRight size={20} color="#0f1621" weight="bold" />

  const tecnologyList = tecnologies.map((tecnology, index) => {
    return <li key={index}>{tecnology}</li>
  })

  return (
    <li className="projects-figure">
      
      <div className="over-img">
        <h3 aria-label={`Projeto ${title}`}>{title}</h3>
        <div className="line"></div>
  
        <div className="bottom">
          <ul>
            {tecnologyList}
          </ul>
          
          
          <div className="links">
            <LinkButton content="GitHub" style="github" link={links.github} ariaLabel="GitHub" >
              {RightRow}
            </LinkButton>
            <LinkButton content={isPortuguese ? "Visite o Site" : "Visit Website"} style="website" link={links.website} ariaLabel="Visite o site">
              {RightRow}
            </LinkButton>
          </div>
        </div>
        
      </div>
        <Image src={img} width={1080} height={700} alt={alt} />
    </li>
  )
}