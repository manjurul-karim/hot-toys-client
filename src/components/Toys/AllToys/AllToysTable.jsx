import React, { useContext } from "react";
import { authContext } from "../../../providers/AuthProvider";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const AllToysTable = ({ toys }) => {
  const { user } = useContext(authContext);
  const { toyName, toyPrice, email, photoURL, subCategory, quantity, _id } =
    toys;
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
      <td>
        <Link to={`/toysDetails/${_id}`}>
          {" "}
          <button className="btn btn-outline btn-primary"> Details</button>{" "}
          
        </Link>
      </td>
    </tr>
  );
};
export default AllToysTable;
