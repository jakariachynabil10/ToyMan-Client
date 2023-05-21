import React from "react";
import { Link } from "react-router-dom";

const ExtraCard = () => {
  return (
    <>
      <div   className="lg:flex mb-3 items-center gap-5 mt-16">
        <div data-aos="fade-right"
            data-aos-duration="2000" className="relative  border w-full lg:h-[290px]">
          <img
            src="https://cdn.shopify.com/s/files/1/1152/4590/files/home4-banner-02_389f97e8-9d15-431a-abf3-8f72e0508721.png?v=1676032554"
            alt=""
            className="h-full w-full"
          />
          <div className="absolute top-20 right-1 lg:top-36 lg:right-8 text-white transform -translate-y-1/2">
            <p className="font-bold lg:text-4xl text-3xl text-center">
              See Your <br /> Action Toys
            </p>
            <Link
              to="/myToys"
              className="border transition-transform duration-300 transform hover:scale-110 border-none lg:left-12 right-5 absolute px-5 py-2 bg-blue-500 hover:bg-pink-500 rounded-3xl text-white text-center mt-3"
            >
              See Now
            </Link>
          </div>
        </div>
        <div data-aos="fade-left"
            data-aos-duration="2000" className="relative mt-8 lg:mt-0  border w-full lg:h-[290px]">
          <img
            src="https://cdn.shopify.com/s/files/1/1152/4590/files/Untitled-2.png?v=1676033186"
            alt=""
            className="h-full"
            
          />
          <div className="absolute top-20 left-1 lg:top-36 lg:left-10 text-white transform -translate-y-1/2">
            <p className="font-bold text-4xl text-center">
              Add Your <br /> Action Toys
            </p>
            <Link
              to="/addToys"
              className="border transition-transform duration-300 transform hover:scale-110 border-none left-12 absolute px-5 py-2 bg-pink-500 hover:bg-blue-500 rounded-3xl text-white text-center mt-3"
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
