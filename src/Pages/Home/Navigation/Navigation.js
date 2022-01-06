import React from "react";
import { IoMdNotificationsOutline } from 'react-icons/io';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { BiUser } from 'react-icons/bi';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
     <Navbar collapseOnSelect expand="lg" bg="" className="navigation" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Raw market</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"><IoMdNotificationsOutline/></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        <HiOutlineShoppingCart/>
      </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        <BiUser/>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      
    </div>
  );
};

export default Navigation;
