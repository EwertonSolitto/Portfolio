import checkProjectType from "./checkProjectType";

import Card from "./Card";

import projectsData from "../../json/projectList.json"

export default function PrintAllCards()  {
  return projectsData.map(({
    title,
    description,
    imageSrc,
    projectType,
    technologies,
    links
  }, index) => {
    if(checkProjectType(projectType)) {
      return (
        <Card 
          title={title} 
          description={description} 
          imageSrc={imageSrc}
          links={links} 
          technologies={technologies} 
          projectType={projectType} 
          key={index}
        />
      )
    }}
  ) 
}