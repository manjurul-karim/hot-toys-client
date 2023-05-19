import React from "react";
import { Link, useRouteError } from "react-router-dom";
import error404 from "../../assets/error404.gif";
import { Button } from "flowbite-react";
import { FaArrowLeft } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  useTitle("error");
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <img
            className="bg-transparent rounded-full"
            src={error404}
            alt=""
            loading="lazy"
          />
          <div className="flex justify-center mt-5">
            <Button>
              {" "}
              <Link
                className="inline-flex items-center gap-5 justify-center"
                to="/"
              >
                <span>
                  <FaArrowLeft></FaArrowLeft>
                </span>{" "}
                Back to homepage
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
