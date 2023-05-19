import React from "react";

const Banner = () => {
  return (
    <>
      <div className="carousel pt-4 w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
            className="w-full"
          />
         <div className="absolute  flex flex-col justify-center items-center  pt-24 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white pb-16  lg:pl-24 pl-16 ">
              <h2 className="text-6xl py-4 font-bold">
               Get Awesome toys 
              </h2>
              <p>
              We have many types of toys that will bring enjoy to your kids
              </p>
              <div className="lg:flex   pt-4">
                <button className="btn btn-info mr-5">Shop Now</button>
                <button className="btn btn-outline btn-accent">
                 Get Premium Toys
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-success btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-success btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1614897464244-86c6b2fdda79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            className="w-full"
          />
           <div className="absolute  flex flex-col justify-center items-center  pt-24 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white  lg:pl-24 pl-16 w-1/2">
              <h2 className="text-6xl py-4 font-bold">
               Get Awesome toys 
              </h2>
              <p>
              We have many types of toys that will bring enjoy to your kids
              </p>
              <div className="lg:flex  pt-4">
                <button className="btn btn-info mr-5">Shop Now</button>
                <button className="btn btn-outline btn-accent">
                 Get Premium Toys
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-success btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-success btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1599623560574-39d485900c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            className="w-full"
          />
          <div className="absolute flex flex-col justify-center items-center   pt-24 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white  lg:pl-24 pl-16 w-1/2">
              <h2 className="text-6xl py-4 font-bold">
               Get Awesome toys 
              </h2>
              <p>
              We have many types of toys that will bring enjoy to your kids
              </p>
              <div className="lg:flex  pt-4">
                <button className="btn btn-info mr-5">Shop Now</button>
                <button className="btn btn-outline btn-accent">
                 Get Premium Toys
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-success btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-success btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            className="w-full"
          />
           <div className="absolute flex flex-col justify-center items-center  pt-24 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white  lg:pl-24 pl-16 w-1/2">
              <h2 className="text-6xl py-4 font-bold">
               Get Awesome toys 
              </h2>
              <p>
              We have many types of toys that will bring enjoy to your kids
              </p>
              <div className="lg:flex  pt-4">
                <button className="btn btn-info mr-5">Shop Now</button>
                <button className="btn btn-outline btn-accent">
                 Get Premium Toys
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-success btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-success btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
