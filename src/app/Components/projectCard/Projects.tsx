import { ProjectFigure } from "./ProjectFigure"
import portugueseData from '@json/portuguese/projects.json';
import englishData from '@json/english/projects.json';
import useAppContext from '@hook/useAppContext';

export default function Projects() {
  const { isPortuguese } = useAppContext()
  const projectsData = isPortuguese ? portugueseData : englishData

  const figureList = projectsData.projects.map(({title, img, alt, tecnologies, links}, index) => {
    return <ProjectFigure title={title} img={img} tecnologies={tecnologies} links={links} alt={alt} key={index}/>
  })

  return (
    <section className="projects">
      <div className="card projects-card right">
        <h2>{projectsData.title}</h2>

        <ul className="figure-list">
          {figureList}
        </ul>
      </div>
    </section>
  )
}