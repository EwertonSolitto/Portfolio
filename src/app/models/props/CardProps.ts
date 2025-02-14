import CardLinks from "../types/CardLinks"
import ProjectType from "../types/ProjectType"

export default interface CardProps {
  title: string
  description: {
    portuguese: string,
    english: string,
  }
  projectType: ProjectType
  technologies: Array<{
    name: string,
    src: string,
  }>
  links: CardLinks
}