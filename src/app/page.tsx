import GithubWhiteLogo from "./assets/technologies/GithubWhiteLogo";
import LinkedInWhiteLogo from "./assets/socialMedia/LinkedInWhiteLogo";
import Header from "./Components/Header";

import TextCard from "./Components/textCard/TextCard";
import ListCard from "./Components/listCard/ListCard";
import TechnologyList from "./Components/listCard/TechnologyList";

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
        'Olá! Eu sou Ewerton Solitto, tenho 19 anos e sou Programador Fullstack mais focado no Front-end. Estou estudando programação a mais de 1 ano e procuro minha primeira oportunidade na área.',
        style: 'text'
      },
      {content: 
        'Possuo conhecimentos sólidos nas principais tecnologias web, hoje estou no foco em aprender os frameworks mais procurados do mercado e nas melhores práticas para garantir que meus projetos estejam sempre em alta qualidade.',
        style: 'text'
      }]
  }

  const technologyListCardProps = {
    title: {content: 'Habilidades'},
    lists: [
      <TechnologyList key={1} title="Tecnologias que domino:" technologies={[
        {svg: <HTMLLogo width={56} height={56}/>, description:{content: 'HTML'}},
        {svg: <CSSLogo width={56} height={56}/>, description:{content: 'CSS'}},
        {svg: <JavascriptLogo width={56} height={56}/>, description:{content: 'Javascript'}},
        {svg: <TypescriptLogo width={56} height={56}/>, description:{content: 'Typescript'}},
        {svg: <ReactJSLogo width={56} height={56}/>, description:{content: 'ReactJs'}},
        {svg: <SassLogo width={56} height={56}/>, description:{content: 'Sass'}},
        {svg: <BootstrapLogo width={56} height={56}/>, description:{content: 'Bootstrap'}},
        {svg: <TailwindCSSLogo width={56} height={35}/>, description:{content: 'TailwindCSS'}},
        {svg: <GitLogo width={56} height={56}/>, description:{content: 'Git'}},
        {svg: <GithubBlackLogo width={56} height={56}/>, description:{content: 'Github'}},
        {svg: <FigmaLogo width={37} height={56}/>, description:{content: 'Figma'}},
      ]}/>,
      <TechnologyList key={2} title="Tecnologias com pouco domínio:" technologies={[
        {svg: <NodeJSLogo width={56} height={56}/>, description:{content: 'NodeJS'}},
        {svg: <GraphQLLogo width={56} height={56}/>, description:{content: 'GraphQL'}},
        {svg: <MongoDBLogo width={26} height={56}/>, description:{content: 'MongoDB'}},
        {svg: <PrismaLogo width={46} height={56}/>, description:{content: 'Prisma'}},
        {svg: <ViteLogo width={56} height={56}/>, description:{content: 'Vite'}},
        {svg: <NextJSLogo width={56} height={56}/>, description:{content: 'NextJS'}},
        {svg: <DockerLogo width={56} height={56}/>, description:{content: 'Docker'}},
      ]}/>,
      <TechnologyList key={3} title="Tecnologias que pretendo aprender:" technologies={[
        {svg: <AngularLogo width={56} height={56}/>, description:{content: 'Angular'}},
        {svg: <JestLogo width={50} height={56}/>, description:{content: 'Jest'}},
        {svg: <VueJSLogo width={56} height={49}/>, description:{content: 'Vue.js'}},
        {svg: <ElectronLogo width={56} height={56}/>, description:{content: 'Electron'}},
        {svg: <NestJSLogo width={56} height={54}/>, description:{content: 'NestJS'}},
        {svg: <PhotoshopLogo width={56} height={55}/>, description:{content: 'Photoshop'}},
        {svg: <PythonLogo width={46} height={56}/>, description:{content: 'Python'}},
      ]} />
    ]
  }
  
  return (
    <div className="app">
      <Header/>

      <main className="home-main">
        <TextCard side="left" paragraphs={mainProps.text} a={mainProps.buttons} />
      </main>
      
      <section className="about">
        <TextCard side="right" title={aboutProps.title} paragraphs={aboutProps.text} />
      </section>

      <section className="tecnologies">
        <ListCard side="left" title={technologyListCardProps.title} lists={technologyListCardProps.lists}/>
      </section>
    </div>
  );
}

export default App;
