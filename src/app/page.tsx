'use client'
import Header from "@Components/header/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "@/Components/projectCard/Projects";
import Technologies from "@Components/technologiesCard/Technologies";
import ContactCard from "@Components/contactCard/ContactCard";
import Footer from "@Components/Footer";
import Background from "@Components/background/Background";
import NavigationDiv from "@Components/NavigationDiv";

import AppProvider from "@context/AppProvider";

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

        <Technologies />

        <NavigationDiv section="projects" />

        <Projects />

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
