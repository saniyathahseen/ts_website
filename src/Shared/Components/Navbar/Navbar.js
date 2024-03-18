import React from "react";
import "./Navbar.css";
// import { FaBars } from "react-icons/fa";
// import { NavLink as Link } from "react-router-dom";
// import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// export const Nav = styled.nav`
//   height: 85px;
//   display: flex;
//   justify-content: space-between;
//   padding: 0.2rem calc((100vw - 1000px) / 2);
//   z-index: 12;
// `;

// export const NavLink = styled(Link)`
//   color: #808080;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;
//   &.active {
//     color: #111;
//   }
// `;

// export const Bars = styled(Link)`
//   display: none;
//   color: #808080;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: -24px;
//   /* Second Nav */
//   /* margin-right: 24px; */
//   /* Third Nav */
//   /* width: 100vw;
// white-space: nowrap; */
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

const Navbars = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="p-3">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-black" to="/">
                HOME
              </Link>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-black" to="/stories">
                STORIES
              </Link>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-black" to="/testimonials">
                TESTIMONIALS
              </Link>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-black" to="/store">
                STORE
              </Link>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-black" to="/about">
                ABOUT
              </Link>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-black" to="/enquire">
                ENQUIRE
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <>
    //   <Nav>
    //     <NavMenu>
    //       <NavLink to="/" activeStyle>
    //         Home
    //       </NavLink>
    //       <NavLink to="/stories" activeStyle>
    //         STORIES
    //       </NavLink>
    //       <NavLink to="/testimonials" activeStyle>
    //         TESTIMONIALS
    //       </NavLink>
    //       <NavLink to="/store" activeStyle>
    //         STORE
    //       </NavLink>
    //       <NavLink to="/about" activeStyle>
    //         ABOUT
    //       </NavLink>
    //       <NavLink to="/enquire" activeStyle>
    //         ENQUIRE
    //       </NavLink>
    //     </NavMenu>
    //   </Nav>
    // </>
  );
};

export default Navbars;
