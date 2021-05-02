import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComponent() {
  return (
    <React.Fragment>
      <Navbar
        expand="md"
        className="nav-background py-0 shadow"
        fixed="top"
        collapseOnSelect={true}
        variant="light"
      >
        <Navbar.Brand href="/" className="mx-0">
          <img
            src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png"
            alt=""
            className="img-fluid logo py-0 my-0"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />        
        <Navbar.Collapse id="basic-navbar-nav">          
          <Nav className="links">            
            <NavLink exact to="/" activeClassName="activeNav">              
              <Nav.Link
                href="/"
                className="font-demi font-17 px-3 navbar-item
                  text-white text-center"
              >
                Home
              </Nav.Link>
            </NavLink>
            <NavLink to="/blog-list" activeClassName="activeNav">
              <Nav.Link
                as={Link}
                to="/blog-list"
                className="font-demi font-17
                  px-3 navbar-item text-white text-center"
              >
                Blog
              </Nav.Link>
            </NavLink>
           
            <NavLink to="/about" activeClassName="activeNav">
              <Nav.Link
                href="/about"
                className="font-demi font-17
                  px-3 navbar-item text-white text-center"
              >
                About
              </Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <nav className="ml-auto pr-3">
               <a href="/login" class="auth-button">  Login</a> 
        </nav>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarComponent;
