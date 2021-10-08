import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarTop = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink style={{ textDecoration: "none" }} to="/admin">
          {" "}
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink style={{ textDecoration: "none" }} to="/admin">
              {" "}
              <Nav.Link>Home</Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarTop;
