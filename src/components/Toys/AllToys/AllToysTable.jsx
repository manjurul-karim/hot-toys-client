import React, { useContext } from "react";
import { authContext } from "../../../providers/AuthProvider";

const AllToysTable = ({ toys }) => {
  const { user } = useContext(authContext);
  const { toyName, toyPrice, email, photoURL, subCategory, quantity } = toys;
  return (
    <tr className="border-2">
      <td>
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
      <td>{quantity}</td>
      <td>{subCategory}</td>
      <td>{email}</td>
      <th>
        <button className="btn btn-primary btn-outline btn-xs">Detail</button>
      </th>
    </tr>
  );
};
export default AllToysTable;
