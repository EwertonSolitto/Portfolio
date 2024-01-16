import Header from "@Components/header/Header";
import TextCard from "@Components/textCard/TextCard";
import ListCard from "@Components/listCard/ListCard";
import ProjectsCard from "@Components/projectCard/ProjectsCard";
import ContactCard from "@Components/contactCard/ContactCard";
import Footer from "@Components/Footer";
import Background from "@Components/background/Background";
import AppProvider from "@context/AppProvider";

import NavigationDiv from "./Components/NavigationDiv";

function App() {
  
  return (
    <AppProvider>
      <div className="app" id="home">
        <Header/>

        <Background />

        {/* <main className="home-main">
          <TextCard side="left" paragraphs={mainProps.text} a={mainProps.buttons} />
        </main> */}

        <NavigationDiv section="about" />

        {/* <section className="about">
          <TextCard side="right" title={aboutProps.title} paragraphs={aboutProps.text} />
        </section> */}

        <NavigationDiv section="technologies" />

        {/* <section className="technologies">
          <ListCard side="left" lists={technologyListCardProps.lists}/>
        </section> */}

        <NavigationDiv section="projects" />

        {/* <section className="projects">
          <ProjectsCard side="right" title={projectListProps.title} figure={projectListProps.projects}/>
        </section> */}

        <NavigationDiv section="contact" />

        {/* <section className="contact">
          <ContactCard side="left" title={contactProps.title} />
        </section> */}

        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
