import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "./Navbar.module.css";
import asset5 from "../../../Assets/Images/Asset5.png";

const Navbars = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // Close the navbar on mobile after clicking a link
  };

  return (
    <Navbar fixed="top" expand="lg" className={styles['navbar-custom']} expanded={expanded}>
      <Container>
        {/* Title/Brand */}
        <Navbar.Brand as={Link} to="/" className={styles['navbar-title']}>
          {/* Teamshadow Weddingss */}
          <img className={styles['navbar-logo']} src={asset5} alt="Navbar logo" />
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavClick} className={styles['nav-link']}>
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/stories" onClick={handleNavClick} className={styles['nav-link']}>
              STORIES
            </Nav.Link>
            <Nav.Link as={Link} to="/testimonials" onClick={handleNavClick} className={styles['nav-link']}>
              TESTIMONIALS
            </Nav.Link>
            <Nav.Link as={Link} to="/store" onClick={handleNavClick} className={styles['nav-link']}>
              FILM
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleNavClick} className={styles['nav-link']}>
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/enquire" onClick={handleNavClick} className={styles['nav-link']}>
              ENQUIRE
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;