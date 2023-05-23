import React, { useState } from "react";

const BestSelling = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className="flex items-center justify-evenly gap-24">
      <div className="grid md:grid-cols-2 gap-3">
        <div
          className={`relative h-64 w-64 border-2 rounded-lg p-4 ${
            hoveredImage === 0 ? "hovered" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={
              hoveredImage === 0
                ? "https://i.ibb.co/LSL93D1/banner1.jpg"
                : "https://i.ibb.co/NWm7nPW/banner2.png"
            }
            alt="Image"
          />
        </div>
        <div
          className={`relative h-64 w-64 border-2 rounded-lg p-4 ${
            hoveredImage === 1 ? "hovered" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={
              hoveredImage === 1
                ? "https://i.ibb.co/gZNfGxz/banner3.jpg"
                : "https://i.ibb.co/xJTc1KR/banner4.png"
            }
            alt="Image"
          />
        </div>
        <div
          className={`relative h-64 w-64 border-2 rounded-lg p-4 ${
            hoveredImage === 2 ? "hovered" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={
              hoveredImage === 2
                ? "https://i.ibb.co/jZXx1Ln/banner5.png"
                : "https://i.ibb.co/RbQ4954/banner6.png"
            }
            alt="Image"
          />
        </div>
        <div
          className={`relative h-64 w-64 border-2 rounded-lg p-4 ${
            hoveredImage === 3 ? "hovered" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={
              hoveredImage === 3
                ? "https://i.ibb.co/db1SyPv/banner7.jpg"
                : "https://i.ibb.co/w7MYZ08/banner8.png"
            }
            alt="Image"
          />
        </div>
      </div>
      <div>
        <h2 className="text4xl font-bold">
          Our Best and Popular <br /> Selling toys
        </h2>
        <div className="flex gap-10 mt-8">
          <div>
            <h2 className="font-bold text-lg">2.4M</h2>
            <p>Toys Sold</p>
          </div>
          <div>
            <h2 className="text4xl font-bold">1.5M</h2>
            <p>Viewers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
