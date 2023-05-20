import { Rating } from "@smastrom/react-rating";
import React from "react";
import { useLoaderData } from "react-router-dom";

const SingelDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    _id,
    picture,
    available_quantity,
    details,
    name,
    price,
    rating,
    seller,
  } = data;
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${picture})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="lg:flex justify-center items-center text-center text-neutral-content">
         <div>
         <img src={picture} className="h-[500px] mr-10" />
          <p className="mb-5">
              <Rating style={{ maxWidth: 180 }} className="mx-auto" value={rating} readOnly />
            </p>
         </div>
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{name}</h1>
            <p className="mb-5">Seller Name :{seller}</p>
            <p className="mb-5">Quantity :{available_quantity}</p>
            <p className="mb-5">Price :${price}</p>
            <p className="mb-5 text-base">Details :{details}</p> 
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingelDetails;
