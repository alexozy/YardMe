import React, {useState} from 'react';
import hostYards from "./Components/hostYard";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import myYards from "./Components/myYards";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  const [selectedTab, setSelectedTab] = useState("")
  return (
    <div className="App">
      <Nav setSelectedTab={setSelectedTab}></Nav>
      <main>
      {selectedTab==='myYards'&& <myYards />}
      </main>
      <header className="App-header">
        <img src="./yardMeLogo.png" className="App-logo" alt="logo" />
        <p>
          Easy cash is only one yard away!
        </p>
        <a
          className="App-link"
          href="./Components/userLogin"
          target="_blank"
          rel="noopener noreferrer"
        >
         Become a Host!
        </a>
      </header>
      {Footer()}
    </div>
  );
}

export default App;
