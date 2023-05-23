import React from "react";
import { useLoaderData } from "react-router-dom";


const CarDetails = () => {
  const carData =  useLoaderData()
 const {picture, title,} = carData

  return (
    <div className="card card-side bg-base-100 shadow-xl">
    <figure className="w-1/2"><img src={picture} alt="toy picture"/></figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>Click the button to watch on Jetflix app.</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Watch</button>
      </div>
    </div>
  </div>
  );
};

export default CarDetails;
