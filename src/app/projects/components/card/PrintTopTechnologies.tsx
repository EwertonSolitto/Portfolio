import Image from "next/image";

import ProjectCardTechnologyType from "@/models/types/ProjectCardTechnologyType";

export default function PrintTopTechnologies(technologies: Array<ProjectCardTechnologyType>) {
  return technologies.map(({name, src}, index) => {
    if(index > 2) return null
    return (
      <li key={index}>
        <Image src={src} alt={name} width={44} height={44} />
      </li>
    )
  })
}