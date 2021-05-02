import React, { Fragment, useContext, useEffect, useState } from "react";
import Context from "../../context/ResidualWolf/Context";
import Blog from "./Card";
import Spinner from "./Spinner";
import Footer from "../Footer/Footer";
import HomeNavbar from "../HomeNavbar/HomeNavbar";

export default () => {
  const context = useContext(Context);
  const [value, setValue] = useState("");  
  const { getPosts, posts } = context;
  useEffect(() => {
    getPosts();
  }, []);
  console.log(posts, "kill");
  return (
    <Fragment>
      <HomeNavbar />
      <div className="home-page-wrapper">
        <section className="home">
          <div className="container-fluid pb-2 mt-5 mb-3">
            <div className="row mt-3">
              <div className="col-1"></div>
              <div className="col-10">
                <div className="col-md-12 text-center">
                  <h2 className="title mt-5 text-white">Blogs</h2>
                  <h6 className="sub-title text-white">Blogs Pages</h6>
                  <hr className="mb-5"></hr>
                </div>

                <div className="input-group mb-5">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fas fa-search text-primaryColor"></i>
                    </div>
                  </div>
                  <select
                    type="text"
                    className="form-control"
                    placeholder="Search your blogs"
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                  >
                    <option
                      className="card text-white font-regular"
                      value="January"
                    >
                      January
                    </option>
                    <option
                      className="card text-white font-regular"
                      value="Feburary"
                    >
                      Feburary
                    </option>
                    <option
                      className="card text-white font-regular"
                      value="March"
                    >
                      March
                    </option>
                    <option
                      className="card text-white font-regular"
                      value="April"
                    >
                      April
                    </option>
                    <option
                      className="card text-white font-regular"
                      value="May"
                    >
                      May
                    </option>
                    <option
                      className="card text-white font-regular"
                      value="June"
                    >
                      June
                    </option>
                    <option
                      className="card text-white font-regular"
                      value="July"
                    >
                      July
                    </option>
                    <option
                      className="card text-white font-regular"
                      value="August"
                    >
                      August
                    </option>
                    <option
                      className="card text-white font-regular"
                      value="September"
                    >
                      September
                    </option>
                    <option
                      className="card text-white font-regular"
                      value="October"
                    >
                      October
                    </option>
                    <option
                      className="card text-white font-regular"
                      value="November"
                    >
                      November
                    </option>
                    <option
                      className="card text-white font-regular"
                      value="December"
                    >
                      December
                    </option>
                  </select>
                </div>

                <div className="row">
                  {posts && posts.length > 0 ? (
                    posts.map((post, i) => {
                      return <Blog post={post} key={i} />;
                    })
                  ) : (
                    <Spinner />
                  )}
                </div>
                <div className="col-1"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </Fragment>
  );
};
