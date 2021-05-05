import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

function HomeNavbar({ handleCategoryClick }) {
  return (
    <>
      <Navbar />
      <Sidebar handleCategoryClick={handleCategoryClick} />
    </>
  );
}

export default HomeNavbar;
