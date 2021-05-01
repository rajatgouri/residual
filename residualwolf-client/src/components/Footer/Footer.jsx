import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Footer.css";

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
            src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png"
            width="30"
            height="30"
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
