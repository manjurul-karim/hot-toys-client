import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="flex items-center gap-12 justify-end mt-20 mb-12 ">
      <div className="stats stats-vertical lg:stats-horizontal shadow  bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="stat">
          <div className="stat-title">Products</div>
          <div className="stat-value">1250</div>
        </div>

        <div className="stat">
          <div className="stat-title">Customers</div>
          <div className="stat-value">20K+</div>
        </div>

        <div className="stat">
          <div className="stat-title">Happy</div>
          <div className="stat-value">45k+</div>
        </div>
      </div>
      <div className="flex gap-4 w-1/2">
        <div className="text-[48px]  ">
          <FaUserCircle></FaUserCircle>
        </div>
        <div className="w-1/2">
          <h4 className="text-xl font-semibold">MR. Azmal</h4>
          <p className="text-gray-500">
            This toy shop is the best toyshop among our country.provide
            authnetic and best toys.
          </p>
          <div className="rating rating-md">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
