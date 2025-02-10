'use client'

import Image from "next/image";

import PrintProjectTechnologies from "./PrintProjectTechnologies";

import ProjectFigureButtonsDiv from "./projectFigureButtonsDiv/ProjectFigureButtonsDiv";

import useAppContext from "@hook/useAppContext";

import ProjectFigureProps from "@models/props/ProjectFigureProps";

export default function ProjectFigure({title, img, alt, tecnologies, links}: ProjectFigureProps) {
  const { isPortuguese } = useAppContext()

  return (
    <li className="projects-figure">
      
      <div className="over-img">

        <h3 aria-label={(isPortuguese ? "Projeto " : "Project ") + title}>{title}</h3>

        <div className="line"></div>
  
        <div className="bottom">

          <ul>
            {PrintProjectTechnologies(tecnologies)}
          </ul>
          
          <ProjectFigureButtonsDiv github={links.github} website={links.website} />

        </div>
        
      </div>

      <Image src={img} width={1080} height={700} alt={alt} />
      
    </li>
  )
}