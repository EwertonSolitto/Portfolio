import GithubAndWebsiteLinks from "../types/GithubAndWebsiteLinks"

interface ProjectFigureProps {
  title: string
  style?: string
  img: string
  alt: string
  tecnologies: Array<string>
  links: GithubAndWebsiteLinks
}

export default ProjectFigureProps