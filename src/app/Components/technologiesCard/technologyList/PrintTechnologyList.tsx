import TechnologyList from "./TechnologyList"

import TechnologyListProps from "@models/props/TechnologyListProps"

export default function PrintTechnologyList(technologyList: Array<TechnologyListProps>) {
  return (
    technologyList.map(({title, technologies}, index) => {
      return <TechnologyList key={index} title={title} technologies={technologies} />
    })
  )
}