import GithubWhiteLogo from "./assets/GithubWhiteLogo";
import LinkedInWhiteLogo from "./assets/LinkedInWhiteLogo";
import Header from "./Components/Header";
import TextCard from "./Components/TextCard";

import './styles/css/index.css'

function App() {
  const mainText = [
    {name: 'Olá!', style: 'hello'}, 
    {name: 'Bem vindo ao meu portfólio!', style: 'mid-text'}, 
    {name: 'Eu sou o Ewerton Solitto.', style: 'mid-text'}, 
    {name: 'Programador Fullstack', style: 'strong-text'}
  ]

  const mainButtons = [
    {content: 'GitHub', link: 'https://github.com/EwertonSolitto', svg: <GithubWhiteLogo width={30} height={29}/>, alt: "GitHub Logo"},
    {content: 'LinkedIn', link: 'https://www.linkedin.com/in/ewerton-solitto/', svg: <LinkedInWhiteLogo width={30} height={30} />, alt: "LinkedIn Logo"}
  ]
  
  return (
    <div className="app">
      < Header/>
      <main className="home-main">
        < TextCard side="left" paragraphs={mainText} a={mainButtons}/>
      </main>
    </div>
  );
}

export default App;
