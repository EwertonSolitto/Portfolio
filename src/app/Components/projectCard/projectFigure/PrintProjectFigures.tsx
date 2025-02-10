import ProjectFigure from "./ProjectFigure"

import ProjectFigureProps from "@models/props/ProjectFigureProps"

export default function PrintProjectFigures(projectFigures : Array<ProjectFigureProps>) {
  return (
    projectFigures.map(({title, img, alt, tecnologies, links}, index) => {
      return <ProjectFigure title={title} img={img} tecnologies={tecnologies} links={links} alt={alt} key={index}/>
    })
  )
}