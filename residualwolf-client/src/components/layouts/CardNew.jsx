import React, { Fragment } from "react";

export default (props) => {
  // console.log("card", post);
  const post = props.post;
  const onClick = () => {
    props.history.push(`/blog-details?id=${post._id}`);
  };
  return (
    <Fragment>
      <div className="col-md-4 mt-2" key={post._id}>
        <div className="card-deck-wrapper h-100">
          <div className="card-deck">
            <div className="card mb-4 font-regular">
              <div className="card-body">
                <h5 className="text-white mt-0 font-demi mb-3">
                  {post.title.length > 30
                    ? post.title.substring(0, 30) + "..."
                    : post.title}
                </h5>
                <img
                  className="blog-img-2 card-img-top img-fluid"
                  src={post.imageUrl}
                  alt="Card image cap"
                />
              </div>
              <div className="row text-center mt-2 mb-4">
                <div className="col-md-12">
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
      </div>
    </Fragment>
  );
};
