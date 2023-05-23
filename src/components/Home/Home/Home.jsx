/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import FeatureOne from "../ExtraSection/FeatureOne";
import CategoryTab from "../CategoryTab/CategoryTab";
import Testimonial from "./Testimonial";
import BestSelling from "./BestSelling";

const Home = () => {
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
