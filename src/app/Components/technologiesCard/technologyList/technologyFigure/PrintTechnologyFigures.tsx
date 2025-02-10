import TechnologyFigure from "./TechnologyFigure"

import TechnologyFigureProps from "@models/props/TechnologyFigureProps"

export default function PrintTechnologyFigures(technologies: Array<TechnologyFigureProps>) {
  return (
    technologies.map(({img, description}, index) => {
        return <TechnologyFigure key={index} img={img} description={description}/>
      })
  )
}