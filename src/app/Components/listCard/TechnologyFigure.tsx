import { TechnologyFigureProps } from "../../models/interfaces"

export default function TechnologyFigure(props: TechnologyFigureProps) {
  const {svg, description} = props

  return (
    <li>
      <figure>
        <div>
          {svg}
        </div>
        <figcaption className={description?.style}>{description?.content}</figcaption>
      </figure>
    </li>
  )
}