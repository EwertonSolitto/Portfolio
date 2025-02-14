import checkProjectType from "./checkProjectType";

import Card from "./Card";

import projectsData from "../../json/projectList.json"

export default function PrintAllCards()  {
  return projectsData.map(({
    title,
    description,
    projectType,
    technologies,
    links
  }, index) => {
    if(checkProjectType(projectType)) {
      return (
        <Card 
          title={title} 
          description={description} 
          links={links} 
          technologies={technologies} 
          projectType={projectType} 
          key={index}
        />
      )
    }}
  ) 
}