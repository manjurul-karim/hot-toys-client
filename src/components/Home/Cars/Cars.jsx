import React, { useEffect, useState } from "react";
import CarToysCard from "./CarToysCard";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://a10-hot-toys-server-manjurul-karim.vercel.app/allcars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
       
      <div className="grid md:grid-cols-3 gap-4 ">
        {cars.map((car) => (
          <CarToysCard key={car._id} car={car}></CarToysCard>
        ))}
      </div>
    </div>
  );
};

export default Cars;
