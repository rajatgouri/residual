import React, { Fragment } from "react";

export default ({ post }) => {
  return (
    <Fragment>
      <div className="col-12 col-md-6 col-lg-6 col-xl-4" key={post._id}>
        <div className="card-deck-wrapper">
          <div className="card-deck">
            <a href={"blog-details?id=" + post._id}>
              <div className="card mb-4 font-regular">
                <div className="card-body">
                  <h5 className="text-white mt-0 font-demi">
                    {post.title.length > 30
                      ? post.title.substring(0, 30) + "..."
                      : post.title}
                  </h5>
                  <img
                    className="blog-img card-img-top img-fluid"
                    src={post.imageUrl}
                    alt="Card image cap"
                  />
                  <p className="mt-2 mb-2 font-medium text-white">
                    {post.description.substring(0, 60) + "..."}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
