import { TechnologyListProps } from "../models/interfaces";
import TechnologyFigure from "./TechnologyFigure";

export default function TechnologyList(props: TechnologyListProps) {
  const {technologies, title} = props

  const technologiesList = technologies.map(({svg, description}, index) => {
    return <TechnologyFigure key={index} svg={svg} description={description}/>
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