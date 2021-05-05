import React , {useReact, useState,useContext, useEffect} from "react";
import "./Sidebar.css";
import { _BASE_URL } from "../../../ApiUrls";
import Context from "../../../context/ResidualWolf/Context";


function NavbarComponent() {
  const [shouldtoggle , setShouldToggle] = useState(true)
  const sideToggle = () => {
    if (shouldtoggle) {
      document.getElementById("navSide").style.width = "0px";
      document.getElementById("toggler").style.width = "60px";
      document.querySelector(".home-page-wrapper").style.marginLeft = "0px";
      setShouldToggle(false);
    } else {
      document.getElementById("navSide").style.width = "264px";
      document.getElementById("toggler").style.width = "264px";
      document.querySelector(".home-page-wrapper").style.marginLeft = "264px";
      setShouldToggle(true);
    }
  }
  const context = useContext(Context);
  const { getCategories, categories } = context;
  
  useEffect(() => {
    getCategories();
    console.log(categories);
  },[]);
  return (
    <>
      <button class="side-toggler mt-4" id="toggler" onClick={sideToggle}>
        <span class="navbar-toggler-icon">&#9776;</span>
      </button>
      <div class="nav-left-sidebar sidebar-dark mt-5" id="navSide">
        <div class="menu-list">
          <nav class="navbar navbar-expand-lg navbar-light">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav flex-column">
                <li class="nav-item "></li>
                <li class="nav-item ">
                  <a class="nav-link " href="#">
                    <span className="font-bold text-white">Categories</span>
                  </a>
                </li>
                {categories && categories.length > 0
              ? categories.map((category, i) => { 
                return (
                  <li class="nav-item active">
                  <a class="nav-link custom-nav-link" href="#">
                    <i class="fa fa-angle-right ml-3"></i>{category.name}
                  </a>
                </li>
                )
              }) : '' }
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavbarComponent;
