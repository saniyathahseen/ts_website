import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";

const Navbars = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar fixed="top" expand="lg" className="p-1 bg-white shadow" expanded={expanded}>
      <Container>
        {/* Title/Brand */}
        <Navbar.Brand as={Link} to="/" className="navbar-title">
          Teamshadow Weddings
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/stories" onClick={handleNavClick}>
              STORIES
            </Nav.Link>
            <Nav.Link as={Link} to="/testimonials" onClick={handleNavClick}>
              TESTIMONIALS
            </Nav.Link>
            <Nav.Link as={Link} to="/store" onClick={handleNavClick}>
              FILM
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleNavClick}>
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/enquire" onClick={handleNavClick}>
              ENQUIRE
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;