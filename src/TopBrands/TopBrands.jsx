import React from "react";
import first from "../../public/brand/home-logo-1.png";
import second from "../../public/brand/home-logo-2.png";
import third from "../../public/brand/home-logo-4.png";
import fourth from "../../public/brand/home-logo-6.png";

import Marquee from "react-fast-marquee";

const TopBrands = () => {
  return (
    <>
      <h1 className="text-center font-bold text-4xl mt-16">Top Brands</h1>
      <div className="mx-10 mt-10 border p-8 bg-yellow-500">
        <Marquee >
            <img src={first} className="mr-12" alt="" />
            <img src={second} className="mr-12" alt="" />
            <img src={third} className="mr-12" alt="" />
            <img src={fourth} className="mr-12" alt="" />
        </Marquee>
      </div>
    </>
  );
};

export default TopBrands;
