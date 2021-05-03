import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../images/logo.jpeg";
import avatar from '../../../images/profile_avatar.png'

function NavbarComponent() {
  return (
    <React.Fragment>
      <div className="sticky-top nav-background">
        <div className="mb-2">
          <div className="text-center mb-0">
            <img
              src={logo}
              alt="Residual Wolf"
              className="img-fluid py-0 my-0"
              style={{ height: "50px" }}
            />
          </div>
        </div>
        <Navbar
          expand="md"
          className="py-0"
          collapseOnSelect={true}
          variant="light"
        >
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
              <NavLink to="/blog-list" activeClassName="activeNav">
                <Nav.Link
                  as={Link}
                  to="/blog-list"
                  className="font-demi font-17
                  px-3 navbar-item text-white text-center"
                >
                  Market Commentary
                </Nav.Link>
              </NavLink>
              <NavDropdown
                title="Investing Education"
                id="collasible-nav-dropdown"
                className="font-demi font-17 px-3 navbar-item text-primaryColor text-center "
              >
                <div
                  style={{
                    background: "#14171a",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  <Link
                    to="/"
                    className="font-medium text-white dropdown-item"
                  >
                    Equities
                  </Link>
                  <Link
                    to="/"
                    className="font-medium text-white dropdown-item"
                  >
                    Fixed Income
                  </Link>
                  <Link
                    to="/"
                    className="font-medium text-white dropdown-item"
                  >
                    Alternatives
                  </Link>
                </div>
              </NavDropdown>
              <NavDropdown
                title="Categories"
                id="collasible-nav-dropdown"
                className="font-demi font-17 px-3 navbar-item text-primaryColor mobile-visible text-center "
              >
                <div
                  style={{
                    background: "#14171a",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  <Link
                    to="/"
                    className="font-medium text-primaryColor dropdown-item"
                  >
                    Personal Blogs
                  </Link>
                  <Link
                    to="/"
                    className="font-medium text-primaryColor dropdown-item"
                  >
                    Bussiness Blogs
                  </Link>
                  <Link
                    to="/"
                    className="font-medium text-primaryColor dropdown-item"
                  >
                    Affiliate Blogs
                  </Link>
                  <Link
                    to="/"
                    className="font-medium text-primaryColor dropdown-item"
                  >
                    Niche Blogs
                  </Link>
                </div>
              </NavDropdown>
              <NavLink to="/blog-list" activeClassName="activeNav">
                <Nav.Link
                  as={Link}
                  to="/blog-list"
                  className="font-demi font-17
                  px-3 navbar-item text-white text-center"
                >
                  Videos
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
              <div className="dropdown pt-0 mt-0">
                <a
                  className="img-fluid"
                  href="#"
                  id="navbarDropdownMenuLink2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={avatar}
                    width="30"
                    height="30"
                    alt="Residual Wolf"                    
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right nav-user-dropdown bg-secondaryColor text-center"
                  aria-labelledby="navbarDropdownMenuLink2"
                >
                  <button
                    className="text-white font-demi bg-secondaryColor my-2 btn"
                    onClick={(e) => {
                      localStorage.clear();
                      window.location.reload();
                    }}
                  >
                    <i className="fas fa-power-off mr-2"></i>Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="dropdown pt-0 mt-0">
                <a
                  className="img-fluid logo"
                  href="#"
                  id="navbarDropdownMenuLink2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={avatar}
                    width="30"
                    height="30"
                    alt="Residual Wolf"                    
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right nav-user-dropdown bg-secondaryColor text-center"
                  aria-labelledby="navbarDropdownMenuLink2"
                >
                  <Link to="/login">
                    <div className="dropdown-item font-demi">
                      <i className="fas fa-sign-in-alt mr-2"></i>Login
                    </div>
                  </Link>
                  <Link to="/signup">
                    <div className="dropdown-item font-demi">
                      <i className="fas fa-user-circle mr-2"></i>Signup
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </nav>
        </Navbar>
      </div>
    </React.Fragment>
  );
}

export default NavbarComponent;
