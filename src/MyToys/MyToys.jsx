import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SingleMyToy from "./SingleMyToy";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [userToy, setUserToy] = useState([]);
  const [asc, setAsc] = useState(true);

  const url = `https://assaigment11-server.vercel.app/addToy?email=${
    user?.email
  }&sort=${asc ? "asc" : "dec"}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserToy(data);
      });
  }, [url, asc]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assaigment11-server.vercel.app/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toys has been deleted.", "success");
              const remaining = userToy.filter((UT) => UT._id !== _id);
              setUserToy(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          Price Sort
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><button onClick={()=> setAsc(true)}>Low To High</button></li>
          <li><button onClick={()=> setAsc(false)}>Hight To low</button></li>
        </ul>
      </div>
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
            {userToy.map((toy, index) => (
              <SingleMyToy
                handleDelete={handleDelete}
                index={index}
                key={toy._id}
                toy={toy}
              ></SingleMyToy>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
