import Link from "next/link";

import PrintProjectFigures from "./projectFigure/PrintProjectFigures";

import useAppContext from '@hook/useAppContext';

import portugueseData from '@json/portuguese/projects.json';
import englishData from '@json/english/projects.json';

export default function Projects() {
  const { isPortuguese } = useAppContext()
  const projectsData = isPortuguese ? portugueseData : englishData

  return (
    <section className="projects">
      <div className="card projects-card right">
        <h2>{projectsData.title}</h2>

        <ul className="figure-list">
          {PrintProjectFigures(projectsData.projects)}
        </ul>
        
        <div className="see-more">
          <Link href={'/projects'}>{projectsData.seeMore}</Link>
        </div>
      </div>
    </section>
  )
}