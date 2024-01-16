import { ProjectCardProps } from "@models/interfaces"
import { ProjectFigure } from "./ProjectFigure"


export default function ProjectsCard(props: ProjectCardProps) {
  const {side, title, figure} = props

  const figureList = figure.map(({title, img, alt, tecnologies, links, style}, index) => {
    return <ProjectFigure title={title} img={img} tecnologies={tecnologies} links={links} style={style} alt={alt} key={index}/>
  })

  return (
    <div className={`card projects-card ${side}`}>
      <h2 className={title.style}>{title.content}</h2>

      <ul className="figure-list">
        {figureList}
      </ul>
    </div>
  )
}