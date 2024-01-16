import { ListCardProps } from "@models/interfaces"
import TechnologyList from "./TechnologyList"

export default function ListCard(props: ListCardProps) {
  const {lists, side} = props


  const technologyLists = lists.map(({title, technologies}, index) => {
    return <TechnologyList key={index} title={title} technologies={technologies} />
  })

  return (
    <div className={`card list-card ${side}`}>
      
    <h2>Habilidades</h2>

    {technologyLists}

    </div>
  )
}