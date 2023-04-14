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
import Yard from './Components/Yard';
import NewHost from './Components/NewHost';

function App() {
  const [page, setPage] = useState("MyYards")
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [addHost, setAddHost] = useState(false);

  return (
    <div className="App">
          <div>

      <Navbar bg="light" expand="lg">
      <Container>
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

        {isLoggedIn ? <YardNav setPage={setPage} setIsLoggedIn={setIsLoggedIn}/>: null}
        </div>
        
      </Container>
    </Navbar>
  
    </div>
      
    
      <div>
        {!isLoggedIn ? (
            !addHost ? <UserLogin setIsLoggedIn={setIsLoggedIn} setAddHost={setAddHost}/> : <NewHost setIsLoggedIn={setIsLoggedIn} setAddHost={setAddHost}/> 
         ) : <Yard page={page}/>}
      </div>

     <Footer/>
    </div>
  );
}

export default App;
