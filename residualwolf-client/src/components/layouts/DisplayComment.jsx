import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

function DisplayComment({ comm, index }) {
  const [flag, setFlag] = useState(false);
  let count = 0;
  return (
    <>
      {index < 3 && (
        <div className="card">
          <div className="d-flex justify-content-between text-white w-100 px-3 py-2">
            <div className="font-regular">{comm.text}</div>
            <div className="font-demi">
              {comm.createdAt.slice(-comm.createdAt.length, 10)}
            </div>
          </div>
        </div>
      )}
      {/* {index >= 3 ? setFlag(true) : ''}
      {flag ? (
        <div className="text-center">
          <div className="text-white bg-secondaryColor font-demi btn-blue pt-3 px-4">
            View More
          </div>
        </div>
      ) : (
        ""
      )} */}
    </>
  );
}

export default DisplayComment;
