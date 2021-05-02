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
        <nav className="ml-auto pr-3 mt-0">
          {localStorage.getItem("token") ? (
            <div
              className="text-white font-demi"
              onClick={(e) => localStorage.clear()}
            >
              <i class="fas fa-power-off mr-2"></i>Logout
            </div>
          ) : (
            <div class="dropdown pt-0 mt-0">
              <a
                class="img-fluid logo"
                href="#"
                id="navbarDropdownMenuLink2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png"
                  alt=""
                  class="user-avatar-md rounded-circle"
                />
              </a>
              <div
                class="dropdown-menu dropdown-menu-right nav-user-dropdown"
                aria-labelledby="navbarDropdownMenuLink2"
              >
                <Link to="/login">
                  <div className="dropdown-item font-demi">
                    <i class="fas fa-sign-in-alt mr-2"></i>Login
                  </div>
                </Link>
                <Link to="/signup">
                  <div className="dropdown-item font-demi">
                    <i class="fas fa-user-circle mr-2"></i>Signup
                  </div>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarComponent;
