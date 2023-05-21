import React, { useEffect, useRef, useState } from "react";

import SingleToysCard from "./SingleToysCard";

const AllToys = () => {
  const [toys, setToys] = useState([])
  const searchRef = useRef(null)
  const [search, setSearch] = useState("")
  

  useEffect( ()=>{
    fetch(`https://assaigment11-server.vercel.app/searchToys?search=${search}`)
    .then(res => res.json())
    .then(data => {
      setToys(data)
    })
  } ,[search])

  const handleSearch = () => {
    console.log(searchRef.current.value)
    setSearch(searchRef.current.value);
   
}

  return (
    <>
      <div className="input-group mt-5 flex justify-center">
        <input
          type="text"
          ref={searchRef}
          placeholder="Search"
          className="input input-bordered"
        />
        <button onClick={()=> handleSearch()} className="border px-2 py-2 bg-blue-500 text-white btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="overflow-x-auto ">
        <table className="table w-full mt-5">
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
            {toys.map((toy, index) => (
              <SingleToysCard
                key={toy._id}
                index={index}
                toy={toy}
              ></SingleToysCard>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllToys;
