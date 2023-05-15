import TechnologyListProps from "../interfaces/TechnologyListProps";
import TechnologyFigure from "./TechnologyFigure";

export default function TechnologyList(props: TechnologyListProps) {
  const {technologies, title} = props

  const techList = technologies.map(({svg, description}) => {
    return <li><TechnologyFigure svg={svg} description={description} /></li>
  })

  return (
    <div>
      <h3>{title}</h3>

        <ul>
          {techList}
        </ul>
    </div>
  )
}