import React from "react";
import useTitle from "../../../hooks/useTitle";

const Home = () => {

    useTitle('Home')
  return (
    <div className="bg-[#1C3F3A]">
      <h2 className=" text-4xl font-bold text-center text-white">
      
        {" "}
        This Is Home!!!!!
      </h2>
     
    </div>
  );
};

export default Home;
