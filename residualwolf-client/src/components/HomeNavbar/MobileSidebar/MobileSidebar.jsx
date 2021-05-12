import React, { useContext, useEffect } from "react";
import { _BASE_URL } from "../../../ApiUrls";
import Context from "../../../context/ResidualWolf/Context";
import "./MobileSidebar.css";
import { Link } from "react-router-dom";

function MobileSidebar(props) {
  const context = useContext(Context);
  const { getCategories, categories, getPosts, posts } = context;
  useEffect(() => {
    getCategories();
    getPosts();
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
                    <span className="font-bold text-white main-heading-hover " >
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

                <li class="nav-item mt-5 mb-3">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;
