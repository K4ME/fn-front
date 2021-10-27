import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./routes";

import logoImage from "./images/logo.jpg";
import "./App.css";

function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logoImage}
            alt="Fight Night"
            style={{ width: 40, height: 40, marginTop: -7 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <NavDropdown
              title={<strong>Brazil</strong>}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/weak-1">
                Weak-1
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <Nav.Link as={Link} to="/About">
              <strong>About</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes />
    </>
  );
}

export default App;
