import React from "react";
import { useLoaderData } from "react-router-dom";

const CarDetails = () => {
  const cars = useLoaderData();

  

  const { title, price, picture, _id } = cars;
  return (
    <div>
      <h2>
        My Car Name Is:{title} : car {picture}{" "}
      </h2>
    </div>
  );
};

export default CarDetails;
