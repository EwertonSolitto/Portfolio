import TechnologyFigureProps from "../interfaces/TechnologyFigureProps";

export default function TechnologyFigure(props: TechnologyFigureProps) {
  const {svg, description} = props
  
  return (
    <li>
      <figure>
        {svg}
        <figcaption className={description?.style}>{description?.content}</figcaption>
      </figure>
    </li>
  )
}