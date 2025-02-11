import TechnologyFigureProps from "@/models/props/TechnologyFigureProps"
import TechnologyListProps from "@/models/props/TechnologyListProps"

export default function createTechnologyList(
  technologies: Array<Array<TechnologyFigureProps>>, 
  data: Array<string>
) {
  return technologies.map((techs, index) => {
    return {
      title: data[index],
      technologies: techs
    }
  })
}