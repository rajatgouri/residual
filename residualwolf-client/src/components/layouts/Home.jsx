import React, { Fragment, useContext, useEffect } from "react";
import Context from "../../context/ResidualWolf/Context";
import Blog from "./CardNew";
import Spinner from "./Spinner";
import Footer from "../Footer/Footer";
import NavbarComponent from "../HomeNavbar/Navbar/Navbar";

export default () => {
  const context = useContext(Context);
  const { getPosts, posts } = context;

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Fragment>
      <NavbarComponent />
      <div>
        <section className="home">
          <div className="container-fluid pb-2 mb-3">
            <div className="row mt-5">
              <div className="col-1"></div>
              <div className="col-10 mt-4">
                <h3 className="text-white font-demi text-center">
                  Our Latest Blogs
                </h3>
                <hr className="mb-4" />
                <div className="row d-flex justify-content-center">
                  {/* <div className="col-lg-3 col-md-12 col-sm-12 col-12 advertisement">
                    <div className="card">
                      <img
                        src="https://source.unsplash.com/random/200x285"
                        alt=""
                        className="img-fluid d-lg-block d-none"
                        style={{ borderRadius: "20px" }}
                      />
                    </div>
                  </div> */}
                  {posts && posts.length > 0 ? (
                    posts
                      .slice(0)
                      .reverse()
                      .map((post, i) => {
                        return i < 3 && <Blog post={post} key={i} />;
                      })
                  ) : (
                    <Spinner />
                  )}
                  {/* <div className="col-lg-3 col-md-12 col-sm-12 col-12 advertisement">
                    <div className="card">
                      <img
                        src="https://source.unsplash.com/random/200x285"
                        alt=""
                        className="img-fluid d-lg-block d-none"
                        style={{ borderRadius: "20px" }}
                      />
                    </div>
                  </div> */}
                </div>
                <h3 className="text-white font-demi text-center mt-5">
                  Popular Blogs
                </h3>
                <hr className="mb-4" />
                <div className="row d-flex justify-content-center">
                  {posts && posts.length > 0 ? (
                    posts.map((post, i) => {
                      return i < 3 && <Blog post={post} key={i} index={i} />;
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
