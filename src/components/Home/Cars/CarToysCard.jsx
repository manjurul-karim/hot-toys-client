import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const CarToysCard = ({ car }) => {
  const { title, price, picture, _id ,rating } = car;
  return (
    <div>
      <div className="card w-96 glass shadow-2xl">
        <figure className="h-64 p-4 rounded border-lg">
          <img src={picture} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>price: ${price}</p>
          <div>
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-orange-400"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
              readonly
            />
          </div>
          <div className="card-actions justify-end">
            <Link to={`/cardetails/${_id}`}>
              <button className="btn btn-primary">view Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarToysCard;
