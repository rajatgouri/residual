import React, { useReact, useState, useContext, useEffect } from "react";
import "./Sidebar.css";
import { _BASE_URL } from "../../../ApiUrls";
import Context from "../../../context/ResidualWolf/Context";
import { Link } from "react-router-dom";

function NavbarComponent(props) {
  // const [shouldtoggle, setShouldToggle] = useState(true);
  // const sideToggle = () => {
  //   if (shouldtoggle) {
  //     document.getElementById("navSide").style.width = "0px";
  //     document.getElementById("toggler").style.width = "60px";
  //     document.querySelector(".home-page-wrapper").style.marginLeft = "0px";
  //     setShouldToggle(false);
  //   } else {
  //     document.getElementById("navSide").style.width = "264px";
  //     document.getElementById("toggler").style.width = "264px";
  //     document.querySelector(".home-page-wrapper").style.marginLeft = "264px";
  //     setShouldToggle(true);
  //   }
  // }
  const context = useContext(Context);
  const { getCategories, categories, getPosts, posts } = context;
  useEffect(() => {
    getCategories();
    getPosts();
  }, []);
  return (
    <>
      {/* <button class="side-toggler mt-4" id="toggler" onClick={sideToggle}>
        <span class="navbar-toggler-icon">&#9776;</span>
      </button> */}
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
                <li class="nav-item mb-4">
                  <a class="nav-link " href="#">
                    <span className="font-bold text-white main-heading-hover">
                      Categories
                    </span>
                  </a>
                </li>
                {categories && categories.length
                  ? categories.map((category, i) => {
                      return (
                        <li
                          class="nav-item active"
                          onClick={() =>
                            props.handleCategoryClick(category._id)
                          }
                        >
                          <a class="nav-link custom-nav-link">
                            <i class="fa fa-angle-right ml-3"></i>
                            {category.name}
                          </a>
                        </li>
                      );
                    })
                  : ""}

                <li class="nav-item mt-5 pt-3 mb-3">
                  <a class="nav-link " href="#">
                    <span className="font-bold text-white main-heading-hover">
                      TOP 5
                    </span>
                  </a>
                </li>
                {posts && posts.length
                  ? posts.map((post, i) => {
                      return (
                        i < 5 && (
                          <Link to={`/blog-details?id=${post._id}`}>
                            <div className="card font-regular text-white mb-4 py-0">
                              <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                                  <img
                                    className="img-fluid blog-image h-100"
                                    src={post.imageUrl}
                                    alt="Card image cap"
                                  />
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7 col-7 pt-2 pb-2">
                                  <div className="">
                                    <i className="far fa-clock"></i>&nbsp;&nbsp;
                                    <span className="font-medium">
                                      {post.createdAt.slice(
                                        -post.createdAt.length,
                                        10
                                      )}
                                    </span>
                                    <h5 className="text-white mt-3 font-demi mb-2">
                                      {post.title.length > 30
                                        ? post.title.substring(0, 30) + "..."
                                        : post.title}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        )
                      );
                    })
                  : ""}
                <li class="text-center my-5 w-100">
                  <img
                    src="https://source.unsplash.com/random"
                    alt=""
                    className="img-fluid"
                    style={{ borderRadius: "4px" }}
                  />
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
