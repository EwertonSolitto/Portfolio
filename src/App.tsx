import GithubWhiteLogo from "./assets/GithubWhiteLogo";
import LinkedInWhiteLogo from "./assets/LinkedInWhiteLogo";
import Header from "./Components/Header";
import TextCard from "./Components/TextCard";

import './styles/css/index.css'

function App() {
  const mainText = [
    {name: 'Olá'}, 
    {name: 'Bem vindo ao meu portfólio!'}, 
    {name: 'Eu sou o Ewerton Solitto.'}, 
    {name: 'Programador Fullstack'}
  ]

  const mainButtons = [
    {content: 'GitHub', link: 'https://github.com/EwertonSolitto', svg: <GithubWhiteLogo width={40} height={40}/>, alt: "GitHub Logo"},
    {content: 'LinkedIn', link: 'https://www.linkedin.com/in/ewerton-solitto/', svg: <LinkedInWhiteLogo width={40} height={40} />, alt: "LinkedIn Logo"}
  ]
  
  return (
    <div className="app">
      < Header/>
      <main className="home-main">
        < TextCard side="left" size="10" paragraphs={mainText} a={mainButtons}/>
      </main>
    </div>
  );
}

export default App;
