import React, { useContext } from "react";
import { authContext } from "../../../providers/AuthProvider";

const AllToysTable = ({ toys }) => {
  const { user } = useContext(authContext);
  const { toyName, toyPrice, email, photoURL, SellerName, subCategory } = toys;
  return (
    <tr className="border-2">
      <td >
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{toyName}</td>
      <td>{toyPrice}</td>
      <td>{subCategory}</td>
      <td>{user?.displayName}</td>
      <td>{email}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Delete</button>
        <button className="btn btn-ghost btn-xs">Update</button>
      </th>
    </tr>
  );
};
export default AllToysTable;
