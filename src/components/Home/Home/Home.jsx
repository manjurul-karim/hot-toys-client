/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import CarToys from "./carToys";
import FeatureOne from "../ExtraSection/FeatureOne";
import Tabs from "../CategoryTab/CategoryTab";
import CategoryTab from "../CategoryTab/CategoryTab";
import HeaderBanner from "../Banner/HeaderBanner";

const Home = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("toys.json")
      .then((res) => res.json())
      .then((data) => console.log(data[0].toys))
      .catch((error) => console.error(error));
  }, []);

  useTitle("Home");
  return (
    <div className="">
      <HeaderBanner></HeaderBanner>
      <Banner></Banner>
      <div>
        <div>
          <CategoryTab></CategoryTab>
        </div>
      </div>
      <FeatureOne></FeatureOne>
    </div>
  );
};

export default Home;
