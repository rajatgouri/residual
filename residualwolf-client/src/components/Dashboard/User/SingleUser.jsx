import React from "react";

function SingleUser({ user, index }) {
  return (
    <>
    <tr className="font-demi">
      <td>{index}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
    </tr>      
    </>
  );
}

export default SingleUser;
