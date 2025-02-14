import CardLinks from "../types/CardLinks"
import DescriptionLanguages from "../types/DescriptionLanguages"
import ProjectCardTechnologyType from "../types/ProjectCardTechnologyType"
import ProjectType from "../types/ProjectType"

export default interface CardProps {
  title: string
  description: DescriptionLanguages
  projectType: ProjectType
  technologies: Array<ProjectCardTechnologyType>
  links: CardLinks
}