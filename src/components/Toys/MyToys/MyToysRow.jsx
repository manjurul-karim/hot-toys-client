import React from "react";

const MyToysRow = ({ toys }) => {
  const { toyName, toyPrice, email, photoURL, SellerName, subCategory } = toys;
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
      <td>{SellerName}</td>
      <td>{email}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Delete</button>
        <button className="btn btn-ghost btn-xs">Update</button>
      </th>
    </tr>
  );
};

export default MyToysRow;
