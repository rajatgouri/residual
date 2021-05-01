import React from "react";

function DisplayComment({ comm }) {
  return (
    <div className="d-flex justify-content-between text-primaryColor w-100 grey-hover px-3 py-2">
      <div className="font-regular">{comm.text}</div>
      <div className="font-demi">
        {comm.createdAt.slice(-comm.createdAt.length, 10)}
      </div>
    </div>
  );
}

export default DisplayComment;
