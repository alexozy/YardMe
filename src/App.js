import React, {useState} from 'react';
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import logo from '../src/assets/yardMeLogo.png';
import Navbar from 'react-bootstrap/Navbar';
import {
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

import './App.css';
import UserLogin from './Components/UserLogin';
import YardNav from './Components/Nav';
import MyYards from './Components/MyYards';

function App() {
 
  const isLoggedIn = useState(0);
  // const [selectedTab, setSelectedTab] = useState("")
  return (
    <div className="App">
          <div>
      {/* <header> */}
      <Navbar bg="light" expand="lg">
      <Container>
      {/* navbar logo code for image import */}
        <MDBNavbarBrand href='#'>
            <img
              src={logo}
              height='30'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>

        <Navbar.Brand href="#home">YardMe:Host </Navbar.Brand>
       <div>
        {!isLoggedIn ? YardNav() : null}
        </div>
        
      </Container>
    </Navbar>
    {/* </header> */}
  
    </div>
      
      {/* <Nav setSelectedTab={setSelectedTab}></Nav> */}
      {/* <main> */}
      {/* {selectedTab==='myYards'&& < myYards />}
      {selectedTab==='hostYards'&& <hostYards/>} */}
      {/* </main> */}
      <div>
        {!isLoggedIn ? MyYards() : UserLogin()}
        </div>

      {Footer()}
    </div>
  );
}

export default App;
