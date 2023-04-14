import React, {useState} from 'react';

// import Container from 'react-bootstrap/Container';
// import logo from "../assets/yardMeLogo.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand
// } from 'mdb-react-ui-kit';



  function YardNav({setPage, setIsLoggedIn}) {
  
    return (
      <div> 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link><span onClick = {()=> setPage('MyYards')}>MyYards</span></Nav.Link>
          <Nav.Link><span onClick = {()=> setPage('HostYard')}>HostYard</span></Nav.Link>

          <NavDropdown title="Options" id="basic-nav-dropdown">
            <NavDropdown.Item><span onClick = {() => setIsLoggedIn(false)}>LogOut</span></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </div>
    )
  };


export default YardNav;