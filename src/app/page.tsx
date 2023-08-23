import Header from "./Components/Header";
import TextCard from "./Components/textCard/TextCard";
import ListCard from "./Components/listCard/ListCard";
import ProjectsCard from "./Components/projectCard/ProjectsCard";
import getData from "./staticdata";

async function App() {
  const mainProps = await getData('/home.json')
  const aboutProps = await getData('/about.json')
  const technologyListCardProps = await getData('/technologies.json')
  const ProjectListProps = await getData('/projects.json') 
  
  return (
    <div className="app" id="home">
      <Header/>

      <main className="home-main">
        <TextCard side="left" paragraphs={mainProps.text} a={mainProps.buttons} />
      </main>

      <div id="about"></div>

      <section className="about">
        <TextCard side="right" title={aboutProps.title} paragraphs={aboutProps.text} />
      </section>

      <div id="technologies"></div>

      <section className="technologies">
        <ListCard side="left" title={technologyListCardProps.title} lists={technologyListCardProps.lists}/>
      </section>

      <div id="projects"></div>

      <section className="projects">
        <ProjectsCard side="right" title={ProjectListProps.title} figure={ProjectListProps.projects}/>
      </section>

      <div id="contact"></div>
    </div>
  );
}

export default App;
