import Header from "./Components/Header";
import TextCard from "./Components/TextCard";

import './styles/css/index.css'

function App() {
  return (
    <div className="app">
      < Header/>
      
      <main className="home-main">
        < TextCard/>
      </main>
    </div>
  );
}

export default App;
