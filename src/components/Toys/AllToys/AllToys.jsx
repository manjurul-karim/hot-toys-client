import React, { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import CarToysCard from "../../Home/Cars/CarToysCard";
import AllToysTable from "./AllToysTable";

const AllToys = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allcars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="overflow-x-auto w-full">
      <div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Rating</th>
              <th>price</th>
              <th> button</th>
            </tr>
          </thead>

          <tbody>
            {cars.map((car) => (
              <AllToysTable key={car._id} car={car}></AllToysTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
