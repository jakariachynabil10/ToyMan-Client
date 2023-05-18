import React from "react";
import { Link } from "react-router-dom";

const SingleCategory = ({ marvel }) => {
  const { name, picture, price, rating } = marvel;
  return (
    <>
      <div className="card card-compact w-[90%] transition-transform duration-200 transform-gpu hover:scale-110 shadow-xl">
        <figure>
          <img
            src={picture}
            className="h-[200px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price : {price}</p>
          <p>Rating : {rating}</p>
          <div className="card-actions justify-end">
           <Link> <button className="btn btn-success">View Details</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCategory;
