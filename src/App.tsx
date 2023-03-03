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
  
  return (
    <div className="app">
      < Header/>
      
      <main className="home-main">
        < TextCard size="10" paragraphs={mainText}/>

      </main>
    </div>
  );
}

export default App;
