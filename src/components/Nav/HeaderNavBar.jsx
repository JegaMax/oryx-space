import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ServiceNavItems from './ServiceNavItems';
import '../../style/header.css'
import AboutNavItems from './AboutUsNavItems';

function HeaderTopNavbar() {
   const [isServiceOpen, setIsServiceOpen] = useState(false);
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="navigation-bar oryx-header" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Oryx Space</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <NavDropdown title="Services" className="service" id="collasible-nav-dropdown" >
              <NavDropdown.Item className="service-items">
              <ServiceNavItems show={true}/>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Partners" id="collasible-nav-dropdown" align="end">
            </NavDropdown>
          <NavDropdown title="About Us" id="collasible-nav-dropdown" align="end">
			<AboutNavItems/>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <ServiceNavItems show={isServiceOpen}/>
    </>
  );
}

export default HeaderTopNavbar;