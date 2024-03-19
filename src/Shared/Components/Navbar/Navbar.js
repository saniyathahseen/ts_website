import React from "react";
import "./Navbar.css";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="p-3">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} className="text-decoration-none text-black" to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} className="text-decoration-none text-black" to="/stories">
              STORIES
            </Nav.Link>
            <Nav.Link as={Link} className="text-decoration-none text-black" to="/testimonials">
              TESTIMONIALS
            </Nav.Link>
            <Nav.Link as={Link} className="text-decoration-none text-black" to="/store">
              STORE
            </Nav.Link>
            <Nav.Link as={Link} className="text-decoration-none text-black" to="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} className="text-decoration-none text-black" to="/enquire">
              ENQUIRE
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
