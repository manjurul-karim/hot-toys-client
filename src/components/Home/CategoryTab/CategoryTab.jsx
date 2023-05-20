import { Tabs } from "flowbite-react";
import React from "react";
import FeatureOne from "../ExtraSection/FeatureOne";

const CategoryTab = () => {
  return (
    <div className="flex justify-center">
      <Tabs.Group aria-label="Default tabs" style="default">
        <Tabs.Item active={true} title="All toys">
         All toys
        </Tabs.Item>
        <Tabs.Item title="Sports-Car">Sports car</Tabs.Item>
        <Tabs.Item title="Fire-Truck">Fire Truck</Tabs.Item>
        <Tabs.Item title="Police-Car">Police Car</Tabs.Item>
      </Tabs.Group>
    </div>
  );
};

export default CategoryTab;
