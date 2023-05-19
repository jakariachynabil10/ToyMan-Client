import React from "react";
import { Link } from "react-router-dom";

const ExtraCard = () => {
  return (
    <>
      <div className="lg:flex mb-3 items-center gap-4 mt-16">
        <div className="relative border w-full h-[290px] rounded-lg">
          <img
            src="https://cdn.shopify.com/s/files/1/1152/4590/files/home4-banner-02_389f97e8-9d15-431a-abf3-8f72e0508721.png?v=1676032554"
            alt=""
          />
          <div className="absolute  top-36 right-8 text-white transform -translate-y-1/2">
            <p className="font-bold text-4xl text-center">
              See Your <br /> Action Toys
            </p>
            <Link
              to="/myToys"
              className="border border-none left-12 absolute px-5 py-2 bg-blue-500 hover:bg-pink-500 rounded-3xl text-white text-center mt-3"
            >
              See Now
            </Link>
          </div>
        </div>
        <div className="relative border w-full h-[290px] rounded-lg">
          <img
            src="https://cdn.shopify.com/s/files/1/1152/4590/files/Untitled-2.png?v=1676033186"
            alt=""
          />
          <div className="absolute  top-36 left-10 text-white transform -translate-y-1/2">
            <p className="font-bold text-4xl text-center">
              Add Your <br /> Action Toys
            </p>
            <Link
              to="/addToys"
              className="border border-none left-12 absolute px-5 py-2 bg-blue-500 hover:bg-pink-500 rounded-3xl text-white text-center mt-3"
            >
              See Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraCard;
