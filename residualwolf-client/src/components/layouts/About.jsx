import React, { Fragment, useContext, useEffect } from "react";
import Context from "../../context/ResidualWolf/Context";

import Footer from "../Footer/Footer";
import NavbarComponent from "../HomeNavbar/Navbar/Navbar";

export default () => {
  const context = useContext(Context);
  const { getPosts, posts } = context;

  useEffect(() => {
    getPosts();
  }, []);

  //home

  return (
    <Fragment>
      <NavbarComponent />

      <section className="home">
        <div className="about-page-wrapper">
          <section className="about">
            <div className="container-fluid pb-2 mt-5 mb-3">
              <div className="coontainer">
                <div className="row mt-5 d-flex justify-content-center">
                  <div className="col-md-12 text-center">
                    <h2 className="title text-white mt-5">About</h2>
                    <hr></hr>
                  </div>

                  <div className="col-md-6 p-5 font-regular text-white">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                  {/* <div className="col-md-6 p-5">
                    <img
                      src="https://www.onblastblog.com/wp-content/uploads/2018/05/free-images-for-blogs.jpeg"
                      className="img-fluid"
                    ></img>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};
