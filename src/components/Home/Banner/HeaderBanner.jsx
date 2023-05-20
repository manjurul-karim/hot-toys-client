import React from "react";

const HeaderBanner = () => {
  return (
    <div className="rounded-md h-full ">
      <div
        className="hero min-h-screen rounded-md bg-white"
        style={{
          backgroundImage: `url("https://i.ibb.co/09t8KvC/header-banner.jpg")`,
        }}
      >
        
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Great Happines <br /> With Toys
            </h1>
            <p className="mb-5">
              hurah! kids..All of your cars here.choose your desire cars.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
