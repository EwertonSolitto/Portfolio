import Image from "next/image";

import ProjectCardTechnologyType from "@models/types/ProjectCardTechnologyType";

export default function PrintTechnologyFigures(technologies: Array<ProjectCardTechnologyType>) {
  return technologies.map(({name, src}, index) => {
    return (
      <li key={index}>
        <figure>
          <Image src={src} alt={name} width={56} height={56} />
          <figcaption>{name}</figcaption>
        </figure>
      </li>
    )
  })
}