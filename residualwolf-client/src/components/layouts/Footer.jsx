import React, { Fragment } from "react";

export default () => {
  return (
    <Fragment>
      <nav className="navbar navbar-light">
        <span className="text-primaryColor" style={{ color: "#733fd4" }}>
          © {new Date().getFullYear()} ResidualWolf
        </span>
      </nav>
    </Fragment>
  );
};
