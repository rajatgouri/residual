import React from "react";
import "./Sidebar.css";

function NavbarComponent() {
  return (
    <>
      <div class="nav-left-sidebar sidebar-dark">
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
                <li class="nav-item ">
                  <a class="nav-link " href="#">
                    <span className="font-bold text-white">
                      Categories
                    </span>
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link custom-nav-link" href="#">
                    <i class="fa fa-angle-right ml-3"></i>Personal Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link custom-nav-link" href="#">
                    <i class="fa fa-angle-right ml-3"></i>Business Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link custom-nav-link" href="#">
                    <i class="fas fa-angle-right ml-3"></i>Affiliate Blogs
                  </a>
                </li> 
                <li class="nav-item">
                  <a class="nav-link custom-nav-link" href="#">
                    <i class="fas fa-angle-right ml-3"></i>Affiliate Blogs
                  </a>
                </li> 
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavbarComponent;
