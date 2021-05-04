import React from "react";
import avatar from "../../../images/profile_avatar.png";

function SingleUser({ user }) {
  return (
    <>
      <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-3 padding-left-mobile">
        <div class="card font-regular">
          <img
            src={avatar}
            alt=""
            className="img-fluid card-img-top p-3"
            style={{
              borderRadius: "50%",
            }}
          />
          <div class="card-body">
            <h5 class="text-white font-weight-bold mt-2 text-center">
              Name : {user.name}
            </h5>
            <p class="text-white text-center">Email: {user.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleUser;
