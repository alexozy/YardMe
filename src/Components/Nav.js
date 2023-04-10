import Container from 'react-bootstrap/Container';
import logo from "../assets/yardMeLogo.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function yardNav() {
  return (
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">MyYards</Nav.Link>
            <Nav.Link href="#link">HostYard</Nav.Link>
            <NavDropdown title="Options" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">HostYard</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">HostNew</NavDropdown.Item> */}
              <NavDropdown.Item href="#action/3.3">LogOut</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default yardNav;