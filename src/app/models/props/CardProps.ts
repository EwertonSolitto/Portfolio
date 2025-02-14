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
  links: {
    github: string,
    website?: string,
    download?: string
  }
}