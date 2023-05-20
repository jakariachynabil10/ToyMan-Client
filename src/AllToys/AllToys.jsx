import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleToysCard from "./SingleToysCard";

const AllToys = () => {
  const toysLoader = useLoaderData();
  
  return (
    <>
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toysLoader.map((toy, index) => (
              <SingleToysCard key={toy._id}  index={index} toy={toy}></SingleToysCard>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllToys;
