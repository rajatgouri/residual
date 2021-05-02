import React, { Fragment, useContext, useEffect, useState } from "react";
import Context from "../../context/ResidualWolf/Context";
import Spinner from "../layouts/Spinner";
import Footer from "../Footer/Footer";
import NavbarComponent from "../HomeNavbar/Navbar/Navbar";
import swal from "sweetalert";
import { _BASE_URL } from "../../ApiUrls";
import axios from "axios";
import DisplayComment from './DisplayComment'

export default ({ location }) => {
  const id = location.search.split("=")[1];
  const context = useContext(Context);
  const { getPost, post, getComment, comment } = context;

  useEffect(() => {
    getPost(id);
    getComment(id);
  }, [id, comment]);  

  const [addcomment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token")
    if(!token){
      return swal("", "Please Log in to add comment", "error");
    }
    axios
      .post(
        _BASE_URL + "/comment",
        { text: addcomment, blogId: id, userId: token },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status) {
          swal("", "Your comment is added", "success");
          setComment("");
        }
      })
      .catch((err) => swal("", err, "error"));
  };
  return (
    <Fragment>
      <NavbarComponent />
      {post !== null ? (
        <div className="container-fluid">
          <div className="row mt-5 mx-3">
            <div className="col-lg-8 col-md-12 col-sm-12 blog-side  col-12">
              <h3 className="my-5 font-demi text-primaryColor">{post.title}</h3>
              <div class="media ">
                <img
                  src="https://www.w3schools.com/bootstrap4/img_avatar3.png"
                  alt="John Doe"
                  class="mr-3 mt-3 rounded-circle"
                  style={{ width: 40 }}
                ></img>
                <div class="media-body font-regular text-white">
                  <h6 className="mt-3 font-medium">by Residual Wolf</h6>
                  <small>
                    <i>Posted on {post.createdAt.split("T")[0]}</i>
                  </small>
                </div>
              </div>
              <div className="blog-img-1">
                <img src={post.imageUrl} alt="" className="blog-img" />
              </div>
              <div className="description">
                <p className="font-regular text-white">{post.description}</p>
              </div>

              <div className="row mt-5">
                <div className="col-sm-6">
                  <a href={"blog-details?id=6085d5af36f676415ccb7620"}>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5 className="text-white mt-0 font-demi text-white mb-3">
                           5 Ways to curate content on blog post
                        </h5>
                        <img
                          className="blog-img card-img-top img-fluid"
                          src="http://www.appliedart.com/assets/uploads/blog/blogging-SMB.png"
                          alt="Card image cap"
                        />
                        <p className="mt-2 mb-2 font-regular text-white">
                          Many business websites are focused on providing
                          information, much of which doesn’t actually change
                          that much. The “About Us” page isn’t constantly
                          evolving. Same with the “Contact Us” page
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-6">
                  <a href={"blog-details?id=6085d5af36f676415ccb7620"}>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5 className="blog-title card-title mt-0 font-demi text-white mb-3">
                          5 Ways to curate content on blog post
                        </h5>
                        <img
                          className="blog-img card-img-top img-fluid"
                          src="http://www.appliedart.com/assets/uploads/blog/blogging-SMB.png"
                          alt="Card image cap"
                        />
                        <p className="mt-2 mb-2 font-regular text-white">
                          Many business websites are focused on providing
                          information, much of which doesn’t actually change
                          that much. The “About Us” page isn’t constantly
                          evolving. Same with the “Contact Us” page
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-sm-6">
                  <a href={"blog-details?id=6085d5af36f676415ccb7620"}>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5 className="blog-title card-title mt-0 font-demi text-white mb-3">
                          5 Ways to curate content on blog post
                        </h5>
                        <img
                          className="blog-img card-img-top img-fluid"
                          src="http://www.appliedart.com/assets/uploads/blog/blogging-SMB.png"
                          alt="Card image cap"
                        />
                        <p className="mt-2 mb-2 font-regular text-white">
                          Many business websites are focused on providing
                          information, much of which doesn’t actually change
                          that much. The “About Us” page isn’t constantly
                          evolving. Same with the “Contact Us” page
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-sm-6">
                  <a href={"blog-details?id=6085d5af36f676415ccb7620"}>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5 className="blog-title card-title mt-0 font-demi text-white mb-3">
                          5 Ways to curate content on blog post
                        </h5>
                        <img
                          className="blog-img card-img-top img-fluid"
                          src="http://www.appliedart.com/assets/uploads/blog/blogging-SMB.png"
                          alt="Card image cap"
                        />
                        <p className="mt-2 mb-2 font-regular text-white">
                          Many business websites are focused on providing
                          information, much of which doesn’t actually change
                          that much. The “About Us” page isn’t constantly
                          evolving. Same with the “Contact Us” page
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-sm-6">
                  <a href={"blog-details?id=6085d5af36f676415ccb7620"}>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5 className="blog-title card-title mt-0 font-demi text-white mb-3">
                          5 Ways to curate content on blog post
                        </h5>
                        <img
                          className="blog-img card-img-top img-fluid"
                          src="http://www.appliedart.com/assets/uploads/blog/blogging-SMB.png"
                          alt="Card image cap"
                        />
                        <p className="mt-2 mb-2 font-regular text-white">
                          Many business websites are focused on providing
                          information, much of which doesn’t actually change
                          that much. The “About Us” page isn’t constantly
                          evolving. Same with the “Contact Us” page
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-sm-6">
                  <a href={"blog-details?id=6085d5af36f676415ccb7620"}>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5 className="blog-title card-title mt-0 font-demi text-white mb-3">
                          5 Ways to curate content on blog post
                        </h5>
                        <img
                          className="blog-img card-img-top img-fluid"
                          src="http://www.appliedart.com/assets/uploads/blog/blogging-SMB.png"
                          alt="Card image cap"
                        />
                        <p className="mt-2 mb-2 font-regular text-white">
                          Many business websites are focused on providing
                          information, much of which doesn’t actually change
                          that much. The “About Us” page isn’t constantly
                          evolving. Same with the “Contact Us” page
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 addsense p-2"></div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-12 mt-5">
              <hr></hr>
              <h5 className="title my-3 text-white font-demi">Comments: </h5>
              <div className="mb-3">
                {comment.slice(0).reverse().map((comm, i) => (
                  <DisplayComment comm={comm} key={i} index={i} />
                ))}
              </div>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fas fa-comment text-primaryColor"></i>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add your comment"
                    value={addcomment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  ></input>
                </div>
                <button
                  className="text-white bg-secondaryColor font-demi btn-blue mt-3 mb-5"
                  type="submit"
                >
                  Add Comment
                </button>
              </form>
             
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
      <Footer />
    </Fragment>
  );
};
