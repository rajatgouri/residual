import React, { Fragment } from "react";

export default ({ post }) => {
  return (
    <Fragment>
      <div className="card font-regular text-white mb-4 py-0">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
            <img
              className="img-fluid blog-image h-100"
              src={post.imageUrl}
              alt="Card image cap"
            />
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 col-12 pt-4 pb-2">
            <div className="blog-paragraph">
              <i class="far fa-clock"></i>&nbsp;&nbsp;
              <span className="font-medium">
                {post.createdAt.slice(-post.createdAt.length, 10)}
              </span>
              <h5 className="text-white mt-3 font-demi mb-2  pr-lg-3">
                {post.title.length > 30
                  ? post.title.substring(0, 30) + "..."
                  : post.title}
              </h5>
              <p className="mt-2 mb-2 font-medium text-white  pr-lg-3">
                {post.shortDescription.substring(0, 150) + "..."}
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
    </Fragment>
  );
};
