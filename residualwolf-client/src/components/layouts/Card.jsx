import React, { Fragment } from "react";
import Badge from 'react-bootstrap/Badge';

export default ({ post }) => {
  return (
    <Fragment>
      <div className="card font-regular text-white mb-4 py-0">
        <div className="row mr-3">
          <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
            <img
              className="img-fluid blog-image h-100"
              src={post.imageUrl}
              alt="Card image cap"
            />
          </div>
          <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12 pt-4 pb-2">
            <div className="blog-paragraph">
              <i class="far fa-clock"></i>&nbsp;&nbsp;
              <span className="font-medium">
                {post.createdAt.slice(-post.createdAt.length, 10)}
              </span>
              <h5 className="text-white mt-3 font-demi font-weight-bold mb-2  pr-lg-3">
                {post.title.length > 30
                  ? post.title.substring(0, 30) + "..."
                  : post.title}
              </h5>
              <span className="font-medium ">
                {post.tags?.length>0 ? (
                  post.tags.map(t=>{
                    return <Badge variant="secondary" key="t" className="mr-1">{t}</Badge>
                  })
                ): ''}
              </span>
              <p className="mt-2 mb-2 font-medium text-white  pr-lg-3">
                {post.shortDescription.substring(0, 150) + "..."}
              </p>
              <div className="mt-3">
                <a
                  href={`/blog-details?id=${post._id}`}
                  className="text-center text-white py-3"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
