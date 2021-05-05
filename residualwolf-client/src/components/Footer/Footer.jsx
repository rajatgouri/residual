import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Footer.css";
import logo from "../../images/logo.jpeg";

function NavbarComponent() {
  return (
    <React.Fragment>
      <Navbar
        expand="lg"
        className="nav-background  py-2 px-3"
        collapseOnSelect={true}
        variant="light"
      >
        <Navbar.Brand className="mx-0">
          <img
            src={logo}
            style={{ height: "35px" }}
            alt="logo"
            className="img-fluid py-0 my-0 logo"
          />
        </Navbar.Brand>
        <nav className="ml-auto text-white">
          <span className="font-demi">
            © {new Date().getFullYear()} ResidualWolf
          </span>
        </nav>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarComponent;
