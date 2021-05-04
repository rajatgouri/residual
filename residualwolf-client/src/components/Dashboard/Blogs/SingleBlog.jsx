import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";
import { _BASE_URL } from "../../../ApiUrls";
import { Modal } from "react-bootstrap";

function SingleBlog({ post }) {
  const initialState = {
    title: "",
    desc: "",
    url: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [showModal, setShowModal] = useState(false);
  const handleShow = (title, url, desc) => {
    setShowModal(true);
    setFormData({
      title,
      desc,
      url,
    });
  };
  const handleClose = () => setShowModal(false);

  const deleteBlog = (e) => {
    e.preventDefault();
    setShowModal(true);
    axios
      .delete(_BASE_URL + `/blog/${post._id}`)
      .then((res) => {
        swal("", "This blog is deleted", "success");
      })
      .catch((err) => {
        swal("", err.message, "error");
      });
  };
  const updateBlog = (e) => {
    e.preventDefault();
    axios
      .patch(
        _BASE_URL + `/blog/${post._id}`,
        {
          title: formData.title,
          description: formData.desc,
          imageUrl: formData.url,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        swal("", "This blog is updated", "success");
        setShowModal(false);
        setFormData(initialState);
      })
      .catch((err) => {
        swal("", err.message, "error");
      });
  };
  return (
    <>
      {showModal ? (
        <Modal className="mt-5" show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">Edit a blog</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="w-100 h-100">
              <form>
                <div className="form-group">
                  <input
                    name="title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    type="text"
                    className="form-control mt-3"
                    id="exampleFormControlInput1"
                    placeholder="Blog Title"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    name="url"
                    value={formData.url}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    type="text"
                    className="form-control mt-3"
                    id="exampleFormControlInput1"
                    placeholder="Blog Image"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    value={formData.desc}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    name="desc"
                    className="form-control mt-3 mb-4"
                    id="exampleFormControlInput1"
                    placeholder="Category Description"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={updateBlog}
                >
                  Edit
                </button>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
      <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-4" key={post._id}>
        <div className="card font-regular text-white h-100 mb-0 py-0">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-6 col-6">
              <img
                className="img-fluid blog-image"
                src={post.imageUrl}
                alt="Card image cap"
                style={{ borderRadius: "20px 0px 0px 20px" }}
              />
            </div>
            <div className="col-lg-7 col-md-6 col-sm-6 col-6 pt-4 pb-2">
              <i class="far fa-clock"></i>&nbsp;&nbsp;
              <span className="font-medium">
                {post.createdAt.slice(-post.createdAt.length, 10)}
              </span>
              <h5 className="text-white mt-3 font-demi mb-2  pr-3">
                {post.title.length > 30
                  ? post.title.substring(0, 30) + "..."
                  : post.title}
              </h5>
              <p className="mt-2 mb-2 font-medium text-white  pr-3">
                {post.description.substring(0, 150) + "..."}
              </p>
              <div className="mt-3">
                <button
                  className="btn btn-primary mr-2"
                  //   onClick={handleShow(
                  //     post.title,
                  //     post.description,
                  //     post.imageUrl
                  //   )}
                  onClick={(e) =>
                    handleShow(post.title, post.imageUrl, post.description)
                  }
                >
                  Edit
                </button>
                <button className="btn btn-danger mr-2" onClick={deleteBlog}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
