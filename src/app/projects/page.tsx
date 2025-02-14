import { metadata } from '@/layout';

import '@styles/pages/projects.scss'

import AppProvider from '@context/AppProvider';

import PrintAllCards from './components/card/PrintAllCards';

import Header from "@Components/header/Header";
import Footer from '@Components/footer/Footer';
import Title from './components/Title';

metadata.title = 'Projects'

export default function AppProjects() {
  return (
    <AppProvider>
      <div className="app-projects">
        
        <Header />

        <section className="projects-section">
          <Title />
          
          <ul className='projects-list'>

            {PrintAllCards()}
            
          </ul>
        </section>

        <Footer />
      
      </div>
    </AppProvider>
  )
}