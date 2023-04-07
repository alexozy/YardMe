import React, {useState} from 'react';
import Header from './Components/Header';
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
      
      </main>
      <header className="App-header">
        <img src="" className="App-logo" alt="logo" />
        <p>
          Easy cash is only one yard away!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Become a Host!
        </a>
      </header>
    </div>
  );
}

export default App;
