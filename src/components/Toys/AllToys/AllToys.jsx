import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import CarToysCard from "../../Home/Cars/CarToysCard";
import AllToysTable from "./AllToysTable";
import MyToysRow from "../MyToys/MyToysRow";
import { authContext } from "../../../providers/AuthProvider";

const AllToys = () => {
  const { user } = useContext(authContext);
  const [addedToys, setAddedToys] = useState([]);

  useEffect(() => {
    // if (user && user.email) {
    const url =
      "http://localhost:5000/addedtoys";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddedToys(data))
      .catch((error) => console.error(error));
    // }
  }, [user]);

  return (
    <div className="">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Photo</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Sub Category</th>
              <th>Seller Name</th>
              <th>seller email</th>
              <th>Delete/update</th>
            </tr>
          </thead>
          <tbody className="border-4 bg-red-600">
            {addedToys.map((toys) => (
              <AllToysTable key={toys._id} toys={toys}></AllToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
