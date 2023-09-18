import Header from "./Components/Header";
import TextCard from "./Components/textCard/TextCard";
import ListCard from "./Components/listCard/ListCard";
import ProjectsCard from "./Components/projectCard/ProjectsCard";
import getData from "./staticdata";
import ContactCard from "./Components/contactCard/ContactCard";

async function App() {
  const mainProps = await getData('/home.json')
  const aboutProps = await getData('/about.json')
  const technologyListCardProps = await getData('/technologies.json')
  const projectListProps = await getData('/projects.json') 
  const contactProps = await getData('/contact.json')
  
  return (
    <div className="app" id="home">
      <Header/>

      <main className="home-main">
        <TextCard side="left" paragraphs={mainProps.text} a={mainProps.buttons} />
      </main>

      <div id="sobre"></div>

      <section className="about">
        <TextCard side="right" title={aboutProps.title} paragraphs={aboutProps.text} />
      </section>

      <div id="habilidades"></div>

      <section className="technologies">
        <ListCard side="left" title={technologyListCardProps.title} lists={technologyListCardProps.lists}/>
      </section>

      <div id="projetos"></div>

      <section className="projects">
        <ProjectsCard side="right" title={projectListProps.title} figure={projectListProps.projects}/>
      </section>

      <div id="contato"></div>

      <section className="contact">
        <ContactCard side="left" title={contactProps.title} />
      </section>
    </div>
  );
}

export default App;
