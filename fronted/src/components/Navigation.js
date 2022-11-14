import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assests/logo2.png";

function Navigations() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={logo} style={{ width: 130, height: 130 }}></img>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to={"/login"}>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/logbook"}>
              <Nav.Link>New Dive</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/history"}>
              <Nav.Link>My Dives</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigations;
