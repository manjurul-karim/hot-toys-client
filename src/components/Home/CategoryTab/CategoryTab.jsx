import { Tabs } from "flowbite-react";
import React from "react";
import FeatureOne from "../ExtraSection/FeatureOne";
import CarToysCard from "../Cars/CarToysCard";
import RacingCar from "./RacingCar";
import FireTruck from "./FireTruck";
import PoliceCar from "./PoliceCar";
import Cars from "../Cars/Cars";

const CategoryTab = () => {
  return (
    <div className="flex justify-center align-middle items-center my-12">
      <Tabs.Group aria-label="Default tabs" style="default">
        <Tabs.Item active={true} title="All toys">
          <Cars></Cars>
        </Tabs.Item>
        <Tabs.Item title="Racing-Car"><RacingCar></RacingCar></Tabs.Item>
        <Tabs.Item title="Fire-Truck"><FireTruck></FireTruck></Tabs.Item>
        <Tabs.Item title="Police-Car"><PoliceCar></PoliceCar></Tabs.Item>
      </Tabs.Group>
    </div>
  );
};

export default CategoryTab;
