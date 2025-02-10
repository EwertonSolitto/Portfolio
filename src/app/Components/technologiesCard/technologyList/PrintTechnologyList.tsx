import TechnologyListProps from "@/models/props/TechnologyListProps"
import TechnologyList from "./TechnologyList"

export default function PrintTechnologyList(technologyList: Array<TechnologyListProps>) {
  return (
    technologyList.map(({title, technologies}, index) => {
      return <TechnologyList key={index} title={title} technologies={technologies} />
    })
  )
}