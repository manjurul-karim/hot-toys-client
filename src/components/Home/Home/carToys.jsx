/* eslint-disable react/no-unknown-property */
const carToysData = {
  "sports-car": [
    {
      id: 1,
      picture: "sports-car1.jpg",
      name: "Sports Car 1",
      price: 100,
      rating: 4.5,
    },
    {
      id: 2,
      picture: "sports-car2.jpg",
      name: "Sports Car 2",
      price: 150,
      rating: 4.2,
    },
    {
      id: 3,
      picture: "sports-car3.jpg",
      name: "Sports Car 3",
      price: 200,
      rating: 4.7,
    },
  ],
  "fire-truck": [
    {
      id: 4,
      picture: "fire-truck1.jpg",
      name: "Fire Truck 1",
      price: 80,
      rating: 4.0,
    },
    {
      id: 5,
      picture: "fire-truck2.jpg",
      name: "Fire Truck 2",
      price: 120,
      rating: 4.3,
    },
    {
      id: 6,
      picture: "fire-truck3.jpg",
      name: "Fire Truck 3",
      price: 90,
      rating: 4.1,
    },
  ],
  "police-car": [
    {
      id: 7,
      picture: "police-car1.jpg",
      name: "Police Car 1",
      price: 110,
      rating: 4.4,
    },
    {
      id: 8,
      picture: "police-car2.jpg",
      name: "Police Car 2",
      price: 130,
      rating: 4.6,
    },
    {
      id: 9,
      picture: "police-car3.jpg",
      name: "Police Car 3",
      price: 160,
      rating: 4.8,
    },
  ],
};

const CarToys = () => {
  return (
    <div className="grid grid-cols-3 ">
      {Object.keys(carToysData).map((subcategory) => (
        <div key={subcategory}>
          <h2>{subcategory}</h2>
          <ul className="border">
            {carToysData[subcategory].map((car) => (
              <li className="border" key={car.id}>
                <img src={car.picture} alt={car.name} />
                <p>Name: {car.name}</p>
                <p>Price: {car.price}</p>
                <p>Rating: {car.rating}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CarToys;
