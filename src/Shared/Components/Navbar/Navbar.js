import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
// import logo from "../../Assets/Images/logo.png"; // Add a logo

const Navbars = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-custom">
      <Container>
        {/* Brand/Logo */}
        <Navbar.Brand as={Link} to="/">
          {/* <img src={logo} alt="Logo" className="navbar-logo" /> */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/stories">STORIES</Nav.Link>
            <Nav.Link as={Link} to="/testimonials">TESTIMONIALS</Nav.Link>
            <Nav.Link as={Link} to="/film">FILM</Nav.Link>
            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/enquire">ENQUIRE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;