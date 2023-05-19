import React from "react";
import useTitle from "../../../hooks/useTitle";

const Home = () => {

    useTitle('Home')
  return (
    <div>
      <h2 className="bg-red-500 text-4xl font-bold text-center text-white">
        {" "}
        This Is Home!!!!!
      </h2>
    </div>
  );
};

export default Home;
