import { Card } from "flowbite-react";
import React from "react";
import lowestPrice from "../../../assets/feature/lowest-price.png";
import expressDelivery from "../../../assets/feature/express-delivery.png";
import loading from "../../../assets/feature/loading.png";
import office from "../../../assets/feature/office.png";

const FeatureOne = () => {
  return (
    <div>
      <div className="flex justify-between mt-20 mb-12">
        <h2 className="w-1/2 font-bold text-4xl ml-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Why We Are the Best <br /> in the market
        </h2>
        <p className="w-1/2 text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400">
          hot toys provide authentic and resonable prices <br /> KIds toys All
          over Country last 10 yeas. <br /> Currrently we have 100+ Outlet all
          main city in the country.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-5">
        <div className="max-w-sm ">
          <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 shadow-xl">
            <div className="flex justify-center">
              <img className="h-24 w-24 " src={lowestPrice} alt="" />
            </div>
            <div className="">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               Lowest Prices  guaranteed
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
               Hot toys offer their product with cheapest price.
              </p>
            </div>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 shadow-xl">
            <div className="flex justify-center">
              <img className="h-24 w-24 " src={expressDelivery} alt="" />
            </div>
            <div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Same Day Dispatch before 3pm
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
               oder earlier and get your product on time.
              </p>
            </div>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 shadow-xl">
            <div className="flex justify-center">
              <img className="h-24 w-24 " src={loading} alt="" />
            </div>
            <div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               Rearranged Delivery If Changed Mind
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Every product we sell returnd witin 14 Day period,
              </p>
            </div>
          </Card>
        </div>
        <div className="max-w-sm">
          <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 shadow-xl">
            <div className="flex justify-center">
              <img className="h-24 w-24 " src={office} alt="" />
            </div>
            <div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Established 10 Years Ago
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
               In 2013 we moved Our Current Premises.You touch us everywhere.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
