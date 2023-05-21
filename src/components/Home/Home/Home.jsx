/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import FeatureOne from "../ExtraSection/FeatureOne";
import Tabs from "../CategoryTab/CategoryTab";
import CategoryTab from "../CategoryTab/CategoryTab";
import Testimonial from "./Testimonial";
import BestSelling from "./BestSelling";
import CarToysCard from "../Cars/CarToysCard";
import Cars from "../Cars/Cars";


const Home = () => {
  // const [toys, setToys] = useState([]);

  // useEffect(() => {
  //   fetch("toys.json")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data[0].toys))
  //     .catch((error) => console.error(error));
  // }, []);

  useTitle("Home");
  return (
    <div className="">
      <Banner></Banner>
      <CategoryTab></CategoryTab>
      {/* <Cars></Cars> */}
      <FeatureOne></FeatureOne>
      <Testimonial></Testimonial>
      <div className="mt-28 ">
        <BestSelling></BestSelling>
      </div>
    </div>
  );
};

export default Home;
