import { Card } from "flowbite-react";
import React from "react";
import lowestPrice from "../../../assets/feature/lowest-price.png";
import expressDelivery from "../../../assets/feature/express-delivery.png";
import loading from "../../../assets/feature/loading.png";
import office from "../../../assets/feature/office.png";

const FeatureOne = () => {
  return (
    <div>
      <div>
        <h2>Why We Are the Best in the market</h2>
        <p>
          hot toys provide authentic and resonable prices KIds toys All over
          Country last !0 yeas.Currrently we have 100+ Outlet all main cityu in
          our country
        </p>
      </div>
      <div className="grid grid-cols-4">
        <div className="max-w-sm">
          <Card>
            <img className="" src={lowestPrice} alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card>
            <img className="" src={expressDelivery} alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card>
            <img className="" src={loading} alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card>
            <img className="" src={office} alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
