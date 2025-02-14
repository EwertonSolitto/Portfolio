import { metadata } from '@/layout';

import '@styles/pages/projects.scss'

import AppProvider from '@context/AppProvider';

import Header from "@Components/header/Header";
import Footer from '@Components/footer/Footer';
import Card from './components/Card';
import PrintAllCards from './components/PrintAllCards';

metadata.title = 'Projects'

export default function AppProjects() {
  return (
    <AppProvider>
      <div className="app-projects">
        
        <Header />

        <section className="projects-section">
          <h2>Projetos</h2>
          
          <ul className='projects-list'>

            {PrintAllCards()}
            
          </ul>
        </section>

        <Footer />
      
      </div>
    </AppProvider>
  )
}