import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import CarToysCard from "../../Home/Cars/CarToysCard";
import AllToysTable from "./AllToysTable";
import MyToysRow from "../MyToys/MyToysRow";
import { authContext } from "../../../providers/AuthProvider";

const AllToys = () => {
  const { user } = useContext(authContext);
  const [addedToys, setAddedToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleToys, setVisibleToys] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/addedtoys";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAddedToys(data);
        setVisibleToys(data.slice(0, 20));
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const filteredToys = addedToys.filter((toy) =>
      toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setVisibleToys(filteredToys.slice(0, 20));
  }, [addedToys, searchQuery]);

  const handleSeeAllClick = () => {
    setVisibleToys(addedToys.slice(0, addedToys.length));
  };

  return (
    <div className="">
      <div className="mb-4 text-center">
        <input
          type="text"
          placeholder="Search by toy name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Photo</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sub Category</th>
              <th>seller email</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="border-4 bg-red-600">
            {visibleToys.map((toys) => (
              <AllToysTable key={toys._id} toys={toys}></AllToysTable>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleSeeAllClick}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
