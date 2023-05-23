import React, { useEffect, useState } from "react";
import CarToysCard from "../Cars/CarToysCard";

const FireTruck = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allcars")
      .then((res) => res.json())
      .then((data) => {
        const filtereCategory = data.filter(
          (item) => item.categoryName === "fireTruck"
        );
        setCars(filtereCategory);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div>{/* <p>Car length:{cars.length}</p> */}</div>
      <div className="grid grid-cols-3 gap-4">
        {cars.map((car) => (
          <CarToysCard key={car._id} car={car}></CarToysCard>
        ))}
      </div>
    </div>
  );
};

export default FireTruck;
