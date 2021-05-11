import React from "react";
import NavbarComponent from "../HomeNavbar/Navbar/Navbar";
import Footer from "../Footer/Footer";

function Market() {
  return (
    <div>
      <NavbarComponent />
      <div style={{ minHeight: "80vh" }}>
        <h1 className="font-bold text-white text-center mt-5">
          Coming Soon...
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Market;
