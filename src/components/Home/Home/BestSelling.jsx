import React, { useState } from "react";
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.png";
import banner13 from "../../../assets/banner/banner13.jpg";
import banner15 from "../../../assets/banner/banner15.png";
const BestSelling = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // https://i.ibb.co/TMmfLQQ/banner9.png
  // https://i.ibb.co/bLbkq6h/banner10.jpg
  // https://i.ibb.co/WF6j5WH/banner11.jpg
  // https://i.ibb.co/h1t3Pb9/banner12.png
  // https://i.ibb.co/mFj5s60/banner13.jpg
  // https://i.ibb.co/4sT4KJn/banner14.jpg
  // https://i.ibb.co/QrvPCrQ/banner15.png
  return (
    <div className="flex items-center justify-evenly gap-24  ">
      <div className="grid grid-cols-2 gap-3 ">
        <div className="relative h-64 w-64 border-2 rounded-lg p-4 ">
          <img
            src={
              isHovered
                ? "https://i.ibb.co/LSL93D1/banner1.jpg"
                : "https://i.ibb.co/NWm7nPW/banner2.png"
            }
            alt="Image"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="relative h-64 w-64 border-2 rounded-lg p-4 ">
          <img
            src={
              isHovered
                ? "https://i.ibb.co/gZNfGxz/banner3.jpg"
                : "https://i.ibb.co/xJTc1KR/banner4.png"
            }
            alt="Image"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="relative h-64 w-64 border-2 rounded-lg p-4 ">
          <img
            src={
              isHovered
                ? "https://i.ibb.co/jZXx1Ln/banner5.png"
                : "https://i.ibb.co/RbQ4954/banner6.png"
            }
            alt="Image"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="relative h-64 w-64 border-2 rounded-lg p-4 ">
          <img
            src={
              isHovered
                ? "https://i.ibb.co/db1SyPv/banner7.jpg"
                : "https://i.ibb.co/w7MYZ08/banner8.png"
            }
            alt="Image"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
      <div>
        <h2 className="text4xl font-bold ">
          Our Best and Popular <br /> Selling toys
        </h2>
        <div className="flex gap-10 mt-8">
          <div>
            <h2 className="font-bold text-lg">2.4M</h2>
            <p>Toys Sells</p>
          </div>
          <div>
            <h2 className="text4xl font-bold ">1.5M</h2>
            <p>Viewers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
