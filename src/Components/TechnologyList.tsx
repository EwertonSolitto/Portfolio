import TechnologyListProps from "../interfaces/TechnologyListProps";

export default function TechnologyList(props: TechnologyListProps) {
  const {technologies, title} = props

  return (
    <div>
      <h3>{title}</h3>

        <ul>
          {technologies}
        </ul>
    </div>
  )
}