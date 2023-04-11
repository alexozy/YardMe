import React, {useState} from 'react';
// import HostYards from "./Components/HostYard";
// import MyYards from "./Components/MyYards";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBBtn } from 'mdb-react-ui-kit';


import './App.css';
import UserLogin from './Components/UserLogin';

function App() {
  const [selectedTab, setSelectedTab] = useState("")
  return (
    <div className="App">
      <Nav setSelectedTab={setSelectedTab}></Nav>
      {/* <main> */}
      {/* {selectedTab==='myYards'&& < myYards />}
      {selectedTab==='hostYards'&& <hostYards/>} */}
      {/* </main> */}
      {/* {UserLogin()} */}

      {Footer()}
    </div>
  );
}

export default App;
