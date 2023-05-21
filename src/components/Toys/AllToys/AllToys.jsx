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
    <div>
      <div className=" ">
        {cars.map((car) => (
          <AllToysTable key={car._id} car={car}></AllToysTable>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
