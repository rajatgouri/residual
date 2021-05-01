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
                  <a class="nav-link active" href="#">
                    <span className="font-bold">Categories</span>
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="#">
                    <i class="fa fa-fw fa-user-circle ml-3"></i>Personal Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fa fa-fw fa-rocket ml-3"></i>Business Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fas fa-fw fa-chart-pie ml-3"></i>Affiliate Blogs
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fas fa-fw fa-table ml-3"></i>Niche Blog
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
