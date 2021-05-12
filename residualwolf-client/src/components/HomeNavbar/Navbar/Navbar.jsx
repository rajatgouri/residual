import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../images/logo.jpeg";
import avatar from "../../../images/profile.svg";

function NavbarComponent() {
  return (
    <React.Fragment>
      <div className="sticky-top nav-background">
        <Navbar
          expand="lg"
          className="py-2"
          collapseOnSelect={true}
          variant="dark"
        >
          <Navbar.Brand href="/" className="mx-0">
            <img
              src={logo}
              alt="Residual Wolf"
              className="img-fluid py-0 my-0"
              style={{ height: "50px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="links">
              {!localStorage.getItem("token") ? (
                <NavLink to="/login" className="mobile-visible" activeClassName="activeNav">
                  <Nav.Link
                    href="/login"
                    className="font-demi font-17
                px-3 navbar-item text-white text-center"
                  >
                    Login
              </Nav.Link>
                </NavLink>
              ) : ''}
              {!localStorage.getItem("token") ? (
                <NavLink to="/signup" className="mobile-visible" activeClassName="activeNav">
                  <Nav.Link
                    href="/signup"
                    className="font-demi font-17
                          px-3 navbar-item text-white text-center"
                  >
                    Signup
                  </Nav.Link>
                </NavLink>
              ) : ''}
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
              <NavLink to="/market" activeClassName="activeNav">
                <Nav.Link
                  as={Link}
                  to="/market"
                  className="font-demi font-17
                  px-3 navbar-item text-white text-center"
                >
                  Market Commentary
                </Nav.Link>
              </NavLink>
              <NavDropdown
                title="Investing Education"
                id="collasible-nav-dropdown"
                className="font-demi font-17 px-3 navbar-item text-white text-center "
              >
                <div
                  style={{
                    background: "#14171a",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  <Link to="/" className="font-medium text-white dropdown-item">
                    Equities
                  </Link>
                  <Link to="/" className="font-medium text-white dropdown-item">
                    Fixed Income
                  </Link>
                  <Link to="/" className="font-medium text-white dropdown-item">
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
              <NavLink to="/videos" activeClassName="activeNav">
                <Nav.Link
                  as={Link}
                  to="/videos"
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
              {localStorage.getItem("token") ? (
                <NavLink to="#" className="mobile-visible" activeClassName="activeNav" onClick={(e) => {
                  localStorage.clear();
                  window.location.reload();
                }}>
                  <Nav.Link
                    href="#"
                    className="font-demi font-17
                    px-3 navbar-item text-white text-center"
                  >
                    Logout
                  </Nav.Link>
                </NavLink>
              ) : ''}
            </Nav>
          </Navbar.Collapse>
          <nav className="ml-auto pr-3 mt-0 hidden-small">
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
                    className="mb-2"
                    alt="Residual Wolf"
                    style={{ borderRadius: "50%" }}
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right nav-user-dropdown bg-secondaryColor text-center"
                  aria-labelledby="navbarDropdownMenuLink2"
                >
                  <button
                    className="text-white font-demi bg-secondaryColor my-2 btn dropdown-item"
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
                    className="mb-2"
                    alt="Residual Wolf"
                    style={{ borderRadius: "50%" }}
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right nav-user-dropdown bg-secondaryColor text-center"
                  aria-labelledby="navbarDropdownMenuLink2"
                >
                  <Link to="/login">
                    <div className="dropdown-item font-demi text-white">
                      <i className="fas fa-sign-in-alt mr-2 text-white"></i>
                      Login
                    </div>
                  </Link>
                  <Link to="/signup">
                    <div className="dropdown-item font-demi text-white">
                      <i className="fas fa-user-circle mr-2 text-white"></i>
                      Signup
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
