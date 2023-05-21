import React, { useEffect, useState } from "react";
import CarToysCard from "./CarToysCard";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allcars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
       
      <div className="grid grid-cols-3 gap-4 ">
        {cars.map((car) => (
          <CarToysCard key={car._id} car={car}></CarToysCard>
        ))}
      </div>
    </div>
  );
};

export default Cars;
