import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BsArrow90DegLeft } from "react-icons/bs";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const CarDetails = () => {
  const carData = useLoaderData();
  const { picture, title, categoryName, rating, description, price } = carData;
  

  return (
    <div className="w-3/4 h-screen mx-auto flex justify-center items-center">
      <div className="card card-side  bg-base-100 shadow-xl">
        <figure className="w-1/2 p-4 border-2 rounded-md">
          <img src={picture} alt="toy picture" />
        </figure>
        <div className="ml-12 w-1/2 mr-3 mt-4 items-center flex justify-center">
          <div>
            <h2 className="card-title">{title}</h2>
            <p>
              <span className="text-lg font-semibold">Category:</span>{" "}
              {categoryName}
            </p>
            <p>
              <span className="text-lg font-semibold">Price:</span>
              {price}
            </p>
            <div>
              <Rating
                placeholderRating={rating}
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar className="text-orange-400"></FaStar>}
                fullSymbol={<FaStar></FaStar>}
                readonly
              />
            </div>
            <p>
              <span className="text-lg font-semibold">Rating:</span> {rating}
            </p>
            <p>
              <span className="text-lg font-semibold"> Description:</span>{" "}
              {description}
            </p>
            <Link className="card-actions justify-center mb-5 mt-4" to="/">
              <button className="btn btn-outline btn-primary">
                <BsArrow90DegLeft className="mr-4"></BsArrow90DegLeft> Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
