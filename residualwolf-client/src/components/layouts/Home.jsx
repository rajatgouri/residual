import React, { Fragment, useContext, useEffect } from "react";
import Context from "../../context/ResidualWolf/Context";
import Blog from "./CardNew";
import Spinner from "./Spinner";
import Footer from "../Footer/Footer";
import HomeNavbar from "../HomeNavbar/HomeNavbar";

export default () => {
  const context = useContext(Context);
  const { getPosts, posts } = context;

  useEffect(() => {
    getPosts();
  }, []);

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
                  <h2 className="text-white mt-5">Blogs</h2>
                  <h6 className="sub-title text-white">Blogs Posts</h6>
                  <hr className="mb-5"></hr>
                </div>
                <h4 className="text-white font-demi text-center">
                  Our Latest Blogs
                </h4>
                <hr className="mb-4"/>
                <div className="row">                  
                  {posts && posts.length > 0 ? (
                    posts.slice(0).reverse().map((post, i) => {
                      return <Blog post={post} key={i} />;
                    })
                  ) : (
                    <Spinner />
                  )}
                </div>                
                <h4 className="text-white font-demi text-center mt-5">
                  Popular Blogs
                </h4>
                <hr className="mb-4"/>
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
