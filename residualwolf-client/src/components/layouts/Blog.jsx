import React, { Fragment } from "react";

export default ({ post, index }) => {
  console.log(index);
  return (
    <Fragment>
      {index == 0 && (
        <div className="col-lg-2 col-md-12 col-sm-12 col-12 advertisement">
          <div className="card">
            <img
              src="https://source.unsplash.com/random/200x285"
              alt=""
              className="img-fluid d-lg-block d-none"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
      )}
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
                  <p className="mt-2 mb-2 font-medium text-white" >
                    {post.shortDescription.substring(0, 60) + "..."}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {index == 0  && (
        <div className="col-lg-2 col-md-12 col-sm-12 col-12 advertisement">
          <div className="card">
            <img
              src="https://source.unsplash.com/random/200x285"
              alt=""
              className="img-fluid d-lg-block d-none"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};
