import TechnologyFigure from "./TechnologyFigure";

import { TechnologyListProps } from "@models/interfaces";

export default function TechnologyList(props: TechnologyListProps) {
  const {technologies, title} = props

  const technologiesList = technologies.map(({img, description}, index) => {
    return <TechnologyFigure key={index} img={img} description={description}/>
  })

  return (
    <div>
      <h3>{title}</h3>
        <ul>
          {technologiesList}
        </ul>
    </div>
  )
}