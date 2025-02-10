import PrintTechnologyFigures from "./technologyFigure/PrintTechnologyFigures";

import TechnologyListProps from "@models/props/TechnologyListProps";

export default function TechnologyList({technologies, title} : TechnologyListProps) {
  return (
    <div>
      <h3>{title}</h3>
        <ul>
          {PrintTechnologyFigures(technologies)}
        </ul>
    </div>
  )
}