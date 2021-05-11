import React, { Fragment, useContext, useEffect, useState } from "react";
import Context from "../../context/ResidualWolf/Context";
import Blog from "./Card";
import Footer from "../Footer/Footer";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import MobileSidebar from "../HomeNavbar/MobileSidebar/MobileSidebar";

export default () => {
  const context = useContext(Context);
  const [value, setValue] = useState("04");

  const { getPosts, posts } = context;
  useEffect(() => {
    getPosts();
  }, []);

  const [items, setItems] = useState(posts);

  let filteredItems = posts.filter((post) => {
    return post.createdAt.slice(5, 7).includes(value);
  });

  console.log(items);
  const handleCategoryClick = (id) => {
    filteredItems = posts.filter((post) => {
      return post.category.includes(id);
    });
    console.log(id);
    setItems(filteredItems);
  };

  return (
    <Fragment>
      <HomeNavbar handleCategoryClick={handleCategoryClick} />
      <div className="home-page-wrapper">
        <section className="home">
          <div className="container-fluid pb-2 mt-5 mb-3">
            <div className="row mt-3">
              <div className="col-1"></div>
              <div className="col-10">
                <div className="col-md-12 text-center">
                  <h2 className="title text-white">Blogs</h2>
                  <h6 className="sub-title text-white">Blogs Pages</h6>
                  <hr className="mb-5"></hr>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-4 col-md-5 col-sm-12 col-12">
                    <div className="input-group mb-5 w-100">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fas fa-filter text-primaryColor"></i>
                        </div>
                      </div>
                      <select
                        type="text"
                        className="form-control-filter"
                        placeholder="Search your blogs"
                        value={value}
                        onChange={(e) => {
                          setValue(e.target.value);
                          setItems(filteredItems);
                        }}
                      >
                        <option
                          className="card text-white font-regular"
                          value="04"
                          disabled
                        >
                          Filter By Month
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="01"
                        >
                          January
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="02"
                        >
                          Feburary
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="03"
                        >
                          March
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="04"
                        >
                          April
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="05"
                        >
                          May
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="06"
                        >
                          June
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="07"
                        >
                          July
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="08"
                        >
                          August
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="09"
                        >
                          September
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="10"
                        >
                          October
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="11"
                        >
                          November
                        </option>
                        <option
                          className="card text-white font-regular"
                          value="12"
                        >
                          December
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5 col-sm-12 col-12">
                    <div className="input-group mb-5 w-100">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fas fa-search text-primaryColor"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control-filter"
                        placeholder="Search your blogs"
                      />
                    </div>
                  </div>
                </div>

                <div className="row d-flex justify-content-center">
                  {/* <div className="col-lg-2 col-md-12 col-sm-12 col-12 advertisement px-0 d-lg-block d-none">
                    <div className="card h-100">
                      <img
                        src="https://source.unsplash.com/random/200x285"
                        alt=""
                        className="img-fluid h-100"
                        style={{ borderRadius: "20px" }}
                      />
                    </div>
                  </div> */}
                  <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                    {items && items.length > 0 ? (
                      items.map((post, i) => {
                        return <Blog post={post} index={i} key={i} />;
                      })
                    ) : (
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="text-center font-demi font-20 text-white">
                          No Blogs matched your search
                        </div>
                      </div>
                    )}
                  </div>
                  {/* <div className="col-lg-2 col-md-12 col-sm-12 col-12 advertisement px-0 d-lg-block d-none">
                    <div className="card h-100">
                      <img
                        src="https://source.unsplash.com/random/200x285"
                        alt=""
                        className="img-fluid  h-100"
                        style={{ borderRadius: "20px" }}
                      />
                    </div>
                  </div> */}
                </div>
                <div className="col-1"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <MobileSidebar />
      <Footer />
    </Fragment>
  );
};
