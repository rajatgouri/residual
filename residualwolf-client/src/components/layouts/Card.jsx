import React, { Fragment } from "react";

export default ({ post }) => {  
  return (
    <Fragment>
      <div className="col-lg-3 col-md-12 col-sm-12 col-12 advertisement">
        <div className="card">
          <img
            src="https://source.unsplash.com/random/200x285"
            alt=""
            className="img-fluid d-lg-block d-none"
            style={{ borderRadius: "20px" }}
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-4" key={post._id}>
        <div className="card font-regular text-white h-100 mb-0 py-0">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-5 col-5">
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
              <div className="mb-4 mt-lg-5 mt-4">
                <a
                  href={`/blog-details?id=${post._id}`}
                  className="text-center btn-blue text-white py-3"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-12 col-sm-12 col-12 advertisement">
        <div className="card">
          <img
            src="https://source.unsplash.com/random/200x285"
            alt=""
            className="img-fluid d-lg-block d-none"
            style={{ borderRadius: "20px" }}
          />
        </div>
      </div>
    </Fragment>
  );
};
