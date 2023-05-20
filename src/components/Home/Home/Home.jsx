/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import CarToys from "./carToys";
import FeatureOne from "../ExtraSection/FeatureOne";

const carToysData = {
    "sports-car": [
      { id: 1, picture: "sports-car1.jpg", name: "Sports Car 1", price: 100, rating: 4.5 },
      { id: 2, picture: "sports-car2.jpg", name: "Sports Car 2", price: 150, rating: 4.2 },
      { id: 3, picture: "sports-car3.jpg", name: "Sports Car 3", price: 200, rating: 4.7 }
    ],
    "fire-truck": [
      { id: 4, picture: "fire-truck1.jpg", name: "Fire Truck 1", price: 80, rating: 4.0 },
      { id: 5, picture: "fire-truck2.jpg", name: "Fire Truck 2", price: 120, rating: 4.3 },
      { id: 6, picture: "fire-truck3.jpg", name: "Fire Truck 3", price: 90, rating: 4.1 }
    ],
    "police-car": [
      { id: 7, picture: "police-car1.jpg", name: "Police Car 1", price: 110, rating: 4.4 },
      { id: 8, picture: "police-car2.jpg", name: "Police Car 2", price: 130, rating: 4.6 },
      { id: 9, picture: "police-car3.jpg", name: "Police Car 3", price: 160, rating: 4.8 }
    ]
  };

const Home = () => {
    const [toys, setToys] =useState([]);

    useEffect(()=>{
        fetch('toys.json')
        .then(res =>res.json())
        .then(data=>console.log(data[0].toys))
        .catch(error=>console.error(error))
    },[])

    useTitle('Home')
  return (
    <div className="">
      <h2 className=" text-4xl font-bold text-center text-white">
      
        {" "}
        This Is Home!!!!!
      </h2>
      <Banner></Banner>
      <FeatureOne></FeatureOne>
       
       <div className="border"><CarToys></CarToys></div>
       <div className="grid grid-cols-3 ">
        {Object.keys(carToysData).map((subcategory) => (
          <div key={subcategory}>
            <h2>{subcategory}</h2>
            <ul>
              {carToysData[subcategory].map((car) => (
                
                  <carToysData key={car.id} car={car}>

                  </carToysData>
                
              ))}
            </ul>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Home;
