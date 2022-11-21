import React, { useEffect } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {} from "../";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assests/logo2.png";

function Navigations() {
  const user = localStorage.getItem("authenticated") == "false" ? false : true;

  function handleLogout(e) {
    e.preventDefault();
    console.log("logout button");
    localStorage.setItem("authenticated", false);
    localStorage.removeItem("username");

    window.location.replace("/");
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src={logo}
              alt="description"
              style={{ width: 130, height: 130 }}
            ></img>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            {!user && (
              <>
                <LinkContainer to={"/login"}>
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              </>
            )}
            <LinkContainer to={"/logbook"}>
              <Nav.Link>New Dive</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/history"}>
              <Nav.Link>My Dives</Nav.Link>
            </LinkContainer>
            {user && (
              <NavDropdown
                title={
                  <>
                    {
                      ((
                        <img
                          // src={user.userimage}
                          alt="yourPicture"
                          style={{
                            width: 30,
                            height: 30,
                            marginRight: 10,
                            objectFit: "cover",
                            borderRadius: "50%",
                          }}
                        />
                      ),
                      localStorage.getItem("username"))
                    }
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>

                <NavDropdown.Item>
                  <Button variant="danger" onClick={handleLogout}>
                    Logout
                  </Button>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigations;
