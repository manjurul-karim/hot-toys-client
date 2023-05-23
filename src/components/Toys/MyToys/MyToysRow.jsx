import React, { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { authContext } from "../../../providers/AuthProvider";

const MyToysRow = ({  toys , handleDelete }) => {
  const { user } = useContext(authContext);
  const { toyName, toyPrice, email, photoURL, SellerName, subCategory, _id } =
    toys;

 

  return (
    <tr>
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
      <td>{subCategory}</td>
      <td>{user?.displayName}</td>
      <td>{email}</td>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost btn-xs text-xl text-red-600"
        >
          <FaTrash />
        </button>
        <button className="btn btn-ghost btn-xs text-xl text-blue-600">
          <FaEdit></FaEdit>
        </button>
      </th>
    </tr>
  );
};

export default MyToysRow;
