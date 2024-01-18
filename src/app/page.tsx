'use client'
import Header from "@Components/header/Header";
import ListCard from "@Components/listCard/ListCard";
import ProjectsCard from "@Components/projectCard/ProjectsCard";
import ContactCard from "@Components/contactCard/ContactCard";
import Footer from "@Components/Footer";
import Background from "@Components/background/Background";
import NavigationDiv from "@Components/NavigationDiv";

import AppProvider from "@context/AppProvider";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <AppProvider>
      <div className="app" id="home">
        <Header/>

        <Background />

        <Home />

        <NavigationDiv section="about" />

        <About />

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
