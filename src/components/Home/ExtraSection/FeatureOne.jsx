import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card } from "flowbite-react";
import lowestPrice from "../../../assets/feature/lowest-price.png";
import expressDelivery from "../../../assets/feature/express-delivery.png";
import loading from "../../../assets/feature/loading.png";
import office from "../../../assets/feature/office.png";

const FeatureOne = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="px-4">
      <div className="flex justify-between mt-20 mb-12">
        <h2 className="w-1/2 font-bold text-4xl ml-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Why We Are the Best <br /> in the market
        </h2>
        <p className="w-1/2 text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400">
          Hot toys provide authentic and reasonable prices <br /> Kids toys all
          over the country for the past 10 years. <br /> Currently, we have 100+
          outlets in all the main cities in the country.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-5">
        <div className="max-w-sm" data-aos="fade-up">
          <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 shadow-xl">
            <div className="flex justify-center">
              <img
                className="h-24 w-24"
                src={lowestPrice}
                alt="Lowest Prices Guaranteed"
              />
            </div>
            <div className="">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Lowest Prices Guaranteed
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Hot toys offer their products at the cheapest prices.
              </p>
            </div>
          </Card>
        </div>
        <div className="max-w-sm" data-aos="fade-up">
          <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 shadow-xl">
            <div className="flex justify-center">
              <img
                className="h-24 w-24"
                src={expressDelivery}
                alt="Same Day Dispatch before 3pm"
              />
            </div>
            <div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Same Day Dispatch before 3pm
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Order earlier and get your product on time.
              </p>
            </div>
          </Card>
        </div>
        <div className="max-w-sm" data-aos="fade-up">
          <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 shadow-xl">
            <div className="flex justify-center">
              <img
                className="h-24 w-24"
                src={loading}
                alt="Rearranged Delivery If Changed Mind"
              />
            </div>
            <div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Rearranged Delivery If Changed Mind
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Every product we sell can be returned within a 14-day period.
              </p>
            </div>
          </Card>
        </div>
        <div className="max-w-sm "  data-aos="fade-up">
          <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 shadow-xl">
            <div className="flex justify-center">
              <img
                className="h-24 w-24"
                src={office}
                alt="Established 10 Years Ago"
              />
            </div>
            <div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Established 10 Years Ago
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                In 2013, we moved to our current premises. You can find us.
                
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
