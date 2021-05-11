import React, { useContext, useEffect } from "react";
import { _BASE_URL } from "../../../ApiUrls";
import Context from "../../../context/ResidualWolf/Context";
import "./MobileSidebar.css";

function MobileSidebar(props) {
  const context = useContext(Context);
  const { getCategories, categories } = context;

  useEffect(() => {
    getCategories();
    console.log(categories);
  }, []);
  return (
    <div>
      <div className="container display-mobile">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-md-12 col-12">
            <div class="" id="navbarNav">
              <ul class="navbar-nav flex-column">
                <li class="nav-item ">
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
                          <a class="nav-link custom-nav-link text-white font-demi">
                            <i class="fa fa-angle-right ml-3"></i>&nbsp;
                            {category.name}
                          </a>
                        </li>
                      );
                    })
                  : ""}

                <li class="nav-item mt-5">
                  <a class="nav-link " href="#">
                    <span className="font-bold text-white main-heading-hover">
                      Popular Blogs
                    </span>
                  </a>
                </li>
                <li class="text-center my-5">
                  <img
                    src="https://source.unsplash.com/random/200x285"
                    alt=""
                    className="img-fluid"
                    style={{ borderRadius: "20px" }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;
