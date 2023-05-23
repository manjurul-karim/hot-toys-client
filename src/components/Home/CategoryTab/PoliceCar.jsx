import React, { useEffect, useState } from 'react';
import CarToysCard from '../Cars/CarToysCard';

const PoliceCar = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
      fetch("https://a10-hot-toys-server-manjurul-karim.vercel.app/allcars")
        .then((res) => res.json())
        .then((data) => {
          const filtereCategory = data.filter(
            (item) => item.categoryName === "policeCar"
          );
          setCars(filtereCategory);
        })
        .catch((error) => console.log(error));
    }, []);
    return (
      <div>
        <div>
          {/* <p>Car length:{cars.length}</p> */}
        </div>
        <div  className="grid md:grid-cols-3 gap-4">
          {cars.map((car) => (
            <CarToysCard key={car._id} car={car}></CarToysCard>
          ))}
        </div>
      </div>
    );
  };

export default PoliceCar;