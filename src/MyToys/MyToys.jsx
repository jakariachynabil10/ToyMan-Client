import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SingleMyToy from "./SingleMyToy";

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [userToy, setUserToy] = useState([])

    const url = `http://localhost:4300/addToy?email=${user?.email}`;
   useEffect( ()=>{
    fetch(url)
    .then(res=> res.json())
    .then(data => {
        console.log(data)
        setUserToy(data)
    })
   } ,[url])

  //  const handleUpdate
  return (
    <>
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
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
           {
            userToy.map((toy, index) => <SingleMyToy index={index} key={toy._id} toy={toy}></SingleMyToy>)
           }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
