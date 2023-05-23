import React from 'react';
import { Link } from 'react-router-dom';

const CarToysCard = ({car}) => {
    const {title, price ,picture, _id } =car
    return (
        <div>
        <div className="card w-96 glass shadow-2xl">
          <figure className='h-64 p-4 rounded border-lg'>
            <img
              src={picture}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>price: ${price}</p>
            <div className="card-actions justify-end">
              <Link to={`/cardetails/${_id}`}><button  className="btn btn-primary">view Details</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CarToysCard;