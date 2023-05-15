import GithubWhiteLogo from "./assets/technologies/GithubWhiteLogo";
import LinkedInWhiteLogo from "./assets/socialMedia/LinkedInWhiteLogo";
import Header from "./Components/Header";

import './styles/css/index.css'

import TextCard from "./Components/TextCard";
import ListCard from "./Components/ListCard";
import TechnologyList from "./Components/TechnologyList";
import TechnologyFigure from "./Components/TechnologyFigure";

import HTMLLogo from "./assets/technologies/HTMLLogo";
import CSSLogo from "./assets/technologies/CSSLogo";
import JavascriptLogo from "./assets/technologies/JavascripLogo";
import TypescriptLogo from "./assets/technologies/TypescriptLogo";
import ReactJSLogo from "./assets/technologies/ReactJSLogo";
import SassLogo from "./assets/technologies/SassLogo";
import BootstrapLogo from "./assets/technologies/BootstrapLogo";
import TailwindCSSLogo from "./assets/technologies/TailwindCSSLogo";
import GitLogo from "./assets/technologies/GitLogo";
import FigmaLogo from "./assets/technologies/FigmaLogo";
import GithubBlackLogo from "./assets/technologies/GithubBlackLogo";
import NodeJSLogo from "./assets/technologies/NodeJSLogo";
import GraphQLLogo from "./assets/technologies/GraphQLLogo";
import MongoDBLogo from "./assets/technologies/MongoDBLogo";
import PrismaLogo from "./assets/technologies/PrismaLogo";
import ViteLogo from "./assets/technologies/ViteLogo";
import NextJSLogo from "./assets/technologies/NextJSLogo";
import DockerLogo from "./assets/technologies/DockerLogo";
import JestLogo from "./assets/technologies/JestLogo";
import VueJSLogo from "./assets/technologies/VueJSLogo";
import ElectronLogo from "./assets/technologies/ElectronLogo";
import NestJSLogo from "./assets/technologies/NestJSLogo";
import PhotoshopLogo from "./assets/technologies/PhotoshopLogo";
import PythonLogo from "./assets/technologies/PythonLogo";
import AngularLogo from "./assets/technologies/AngularLogo";

function App() {
  const mainProps = {
    text: [
        {content: 'Olá!', style: 'hello'}, 
        {content: 'Bem vindo ao meu portfólio!', style: 'mid-text'}, 
        {content: 'Eu sou o Ewerton Solitto.', style: 'mid-text'}, 
        {content: 'Programador Fullstack', style: 'strong-text'}
    ],
    buttons: [
        {content: 'GitHub', link: 'https://github.com/EwertonSolitto', svg: <GithubWhiteLogo width={30} height={29}/>, alt: "GitHub Logo"},
        {content: 'LinkedIn', link: 'https://www.linkedin.com/in/ewerton-solitto/', svg: <LinkedInWhiteLogo width={30} height={30} />, alt: "LinkedIn Logo"}
    ]
  } 

  const aboutProps = {
    title: {content: 'Sobre'},
    text: [
      {content: 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus sapien quis metus cursus fermentum. Duis id sapien id magna cursus porttitor. Nulla viverra felis at posuere cursus. Maecenas condimentum volutpat hendrerit. Duis consequat felis quis volutpat aliquet. Nullam quis porttitor turpis. Aliquam erat volutpat.',
        style: 'text'
      },
      {content: 
        'Nullam venenatis augue in metus euismod tempus. Sed a varius eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at magna pellentesque, hendrerit ultrices, in ultrices orci consequat. Maecenas eget congue nulla.',
        style: 'text'
      }]
  }

  const technologyListCardProps = {
    title: {content: 'Habilidades'},
    lists: [
      < TechnologyList title="Tecnologias que domino:" technologies={[
        < TechnologyFigure svg={< HTMLLogo width={56} height={56}/>} description={{content: 'HTML'}} key={1}/>,
        < TechnologyFigure svg={< CSSLogo width={56} height={56}/>} description={{content: 'CSS'}} key={2}/>,
        < TechnologyFigure svg={< JavascriptLogo width={56} height={56}/>} description={{content: 'Javascript'}} key={3}/>,
        < TechnologyFigure svg={< TypescriptLogo width={56} height={56}/>} description={{content: 'Typescript'}} key={4}/>,
        < TechnologyFigure svg={< ReactJSLogo width={56} height={56}/>} description={{content: 'ReactJs'}} key={5}/>,
        < TechnologyFigure svg={< SassLogo width={56} height={56}/>} description={{content: 'Sass'}} key={6}/>,
        < TechnologyFigure svg={< BootstrapLogo width={56} height={56}/>} description={{content: 'Bootstrap'}} key={7}/>,
        < TechnologyFigure svg={< TailwindCSSLogo width={56} height={35}/>} description={{content: 'TailwindCSS'}} key={8}/>,
        < TechnologyFigure svg={< GitLogo width={56} height={56}/>} description={{content: 'Git'}} key={9}/>,
        < TechnologyFigure svg={< GithubBlackLogo width={56} height={56}/>} description={{content: 'Github'}} key={10}/>,
        < TechnologyFigure svg={< FigmaLogo width={37} height={56}/>} description={{content: 'Figma'}} key={11}/>,
      ]}/>,
      < TechnologyList title="Tecnologias com pouco domínio:" technologies={[
        < TechnologyFigure svg={< NodeJSLogo width={56} height={56}/>} description={{content: 'NodeJS'}} key={12}/>,
        < TechnologyFigure svg={< GraphQLLogo width={56} height={56}/>} description={{content: 'GraphQL'}} key={13}/>,
        < TechnologyFigure svg={< MongoDBLogo width={26} height={56}/>} description={{content: 'MongoDB'}} key={14}/>,
        < TechnologyFigure svg={< PrismaLogo width={46} height={56}/>} description={{content: 'Prisma'}} key={15}/>,
        < TechnologyFigure svg={< ViteLogo width={56} height={56}/>} description={{content: 'Vite'}} key={16}/>,
      ]}/>,
      < TechnologyList title="Tecnologias que pretendo aprender:" technologies={[
        < TechnologyFigure svg={< NextJSLogo width={56} height={56}/>} description={{content: 'NextJS'}} key={17}/>,
        < TechnologyFigure svg={< AngularLogo width={56} height={56}/>} description={{content: 'Angular'}} key={18}/>,
        < TechnologyFigure svg={< DockerLogo width={56} height={56}/>} description={{content: 'Docker'}} key={19}/>,
        < TechnologyFigure svg={< JestLogo width={50} height={56}/>} description={{content: 'Jest'}} key={20}/>,
        < TechnologyFigure svg={< VueJSLogo width={56} height={49}/>} description={{content: 'Vue.js'}} key={21}/>,
        < TechnologyFigure svg={< ElectronLogo width={56} height={56}/>} description={{content: 'Electron'}} key={22}/>,
        < TechnologyFigure svg={< NestJSLogo width={56} height={54}/>} description={{content: 'NestJS'}} key={23}/>,
        < TechnologyFigure svg={< PhotoshopLogo width={56} height={55}/>} description={{content: 'Photoshop'}} key={24}/>,
        < TechnologyFigure svg={< PythonLogo width={46} height={56}/>} description={{content: 'Python'}} key={25}/>,
      ]} />
    ]
  }
  
  return (
    <div className="app">
      < Header/>

      <main className="home-main">
        < TextCard side="left" paragraphs={mainProps.text} a={mainProps.buttons} />
      </main>
      
      <section className="about">
        < TextCard side="right" title={aboutProps.title} paragraphs={aboutProps.text} />
      </section>

      <section className="tecnologies">
        < ListCard side="left" title={technologyListCardProps.title} lists={technologyListCardProps.lists}/>
      </section>
    </div>
  );
}

export default App;
