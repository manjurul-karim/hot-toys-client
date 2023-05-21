import React from "react";

const AllToysTable = ({ car }) => {
  const { title, price, picture, rating } = car;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        {" "}
        <div className="font-bold">{title}</div>
      </td>
      <td>{rating}</td>
      <td>{price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default AllToysTable;
