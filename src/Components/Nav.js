import React, {useState} from 'react';
import MyYards from './myYards';
import HostYardListing from './hostYard';
import UserLogin from './userLogin.js';
import NewHost from './NewHost';
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



  function YardNav() {
    const [page, setPage] = useState("userLogin")
        function switchPage () {
            if (page === "MyYards") {
                return (
                <MyYards/>
               
             )
        } else if (page === "HostYard") {
                return (
            <div>
                 <HostYardListing/>
            </div>
        )
      }
      else if (page === "UserLogin") {
        return (
    <div>
         <UserLogin/>
    </div>
)
  }
  else if (page === "NewHost") {
    return (
<div>
     <NewHost/>
</div>
)
}
};
  
    return (
      <div> 
        <div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link><span onClick = {()=> setPage('MyYards')}>MyYards</span></Nav.Link>
          <Nav.Link><span onClick = {()=> setPage('HostYard')}>HostYard</span></Nav.Link>
          <NavDropdown title="Options" id="basic-nav-dropdown">
            {/* <NavDropdown.Item href="#action/3.1">HostYard</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">HostNew</NavDropdown.Item> */}
             {/* <NavDropdown.Item href="#action/3.3">LogIn</NavDropdown.Item> */}
            <NavDropdown.Item><span onClick = {() => setPage('UserLogin')}>LogOut</span></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </div>
      {switchPage()}
      </div>
    )
  };
  
  // return (
    // <div>
    //   {/* <header> */}
    //   <Navbar bg="light" expand="lg">
    //   <Container>
    //   {/* navbar logo code for image import */}
    //     <MDBNavbarBrand href='#'>
    //         <img
    //           src={logo}
    //           height='30'
    //           alt=''
    //           loading='lazy'
    //         />
    //       </MDBNavbarBrand>

    //     <Navbar.Brand href="#home">YardMe:Host </Navbar.Brand>
    //    {Nav()}
    //   </Container>
    // </Navbar>
    // {/* </header> */}
  
    // </div>
//   );
// }

export default YardNav;
