import React from "react";
import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <>
      <div className="relative border w-full mt-16">
        <img
          src="https://wpbingosite.com/wordpress/kidsdoy/wp-content/plugins/wpbingo/lib/lookbook/images/bwp_lookbook/lookbook-1.jpg"
          alt=""
          className="h-[160px] lg:h-full"
         
        />
        <div className="absolute top-14 left-0 lg:top-32 w-1/2  lg:left-0 text-white transform -translate-y-1/2">
          <p className="font-bold text-[#DB5D6F]  lg:text-4xl text-lg text-center">
            Go now And See <br /> The Marvelous Action Toys
          </p>
          <Link
            to="/allToys"
            className="border transition-transform duration-300 transform hover:scale-110 border-none lg:left-60 left-14 absolute lg:px-5 lg:py-2 px-3 py-2 bg-blue-500 hover:bg-pink-500 rounded-3xl text-white text-center mt-3"
          >
            Go Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Collection;
