import GithubWhiteLogo from "./assets/GithubWhiteLogo";
import LinkedInWhiteLogo from "./assets/LinkedInWhiteLogo";
import Header from "./Components/Header";
import TextCard from "./Components/TextCard";

import './styles/css/index.css'

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
  
  return (
    <div className="app">
      < Header/>

      <main className="home-main">
        < TextCard side="left" paragraphs={mainProps.text} a={mainProps.buttons} />
      </main>
      
      <section className="about">
        < TextCard side="right" title={aboutProps.title} paragraphs={aboutProps.text} />
      </section>
    </div>
  );
}

export default App;
