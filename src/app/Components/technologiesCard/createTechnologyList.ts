import TechnologyFigureProps from "@/models/props/TechnologyFigureProps"

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