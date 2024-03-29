import React, { useContext, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
// ..
AOS.init();

const ShopByCategory = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("Marvel Toys");

  const url = `https://assaigment11-server.vercel.app/toys?sub_category=${category}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [category]);

  const validation = () => {
    if (!user) {
      Swal.fire("You Have To Login first");
      <Navigate to='/login'></Navigate>
    }
  };

  return (
    <>
      <h1 className="text-center font-bold  text-4xl my-16">
        Shop By Category
      </h1>
      <Tabs>
        <TabList className="flex justify-center mb-8">
          <Tab
            className={`px-6 py-3 mr-4 rounded-full text-lg font-bold transition-colors duration-300 ${
              category === "Marvel Toys"
                ? "bg-[#5eb4ba] text-black"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setCategory("Marvel Toys")}
          >
            Marvels
          </Tab>
          <Tab
            className={`px-6 py-3 mr-4 rounded-full text-lg font-bold transition-colors duration-300 ${
              category === "Avengers Toys"
                ? "bg-[#5eb4ba] text-black"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setCategory("Avengers Toys")}
          >
            Avengers
          </Tab>
          <Tab
            className={`px-6 py-3 mr-4 rounded-full text-lg font-bold transition-colors duration-300 ${
              category === "Star Wars Toys"
                ? "bg-[#5eb4ba] text-black"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setCategory("Star Wars Toys")}
          >
            Star Wars
          </Tab>
        </TabList>

        <TabPanel>
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-16 lg:mx-4 mt-10 "
          >
            {toys.map((toy) => {
              const { _id, name, picture, rating, price } = toy;
              return (
                <>
                  <div className="card card-compact w-[90%] transition-transform duration-300 transform-gpu hover:scale-110 shadow-xl">
                    <figure>
                      <img src={picture} className="h-[200px]" />
                    </figure>
                    <div className="card-body">
                      <h2 className="text-lg font-bold mb-2">{name}</h2>
                      <p className="text-gray-700">Price: ${price}</p>
                      <p>
                        <Rating
                          style={{ maxWidth: 180 }}
                          value={rating}
                          readOnly
                        />
                      </p>
                      <div className="card-actions justify-end">
                        <Link to={`/toy/${_id}`}>
                          {" "}
                          <button onClick={()=> validation()} className="border px-6 py-2 rounded-xl  text-center border-[#5eb4ba] hover:bg-[#5eb4ba] text-black transition-all duration-500 relative overflow-hidden ">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="grid grid-cols-1  lg:grid-cols-3  gap-8 mx-16 lg:mx-4 mt-10 "
          >
            {toys.map((toy) => {
              const { _id, name, picture, rating, price } = toy;
              return (
                <>
                  <div className="card card-compact w-[90%] transition-transform duration-300 transform-gpu hover:scale-110 shadow-xl">
                    <figure>
                      <img src={picture} className="h-[200px]" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{name}</h2>
                      <p>Price :{price}</p>
                      <p>
                        <Rating
                          style={{ maxWidth: 180 }}
                          value={rating}
                          readOnly
                        />
                      </p>
                      <div className="card-actions justify-end">
                        <Link to={`/toy/${_id}`}>
                          {" "}
                          <button onClick={()=> validation()} className="border px-6 py-2 rounded-xl  text-center border-[#5eb4ba] hover:bg-[#5eb4ba] text-black transition-all duration-500 relative overflow-hidden ">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-16 lg:mx-4 mt-10 "
          >
            {toys.map((toy) => {
              const { _id, name, picture, rating, price } = toy;
              return (
                <>
                  <div className="card card-compact w-[90%] transition-transform duration-300 transform-gpu hover:scale-110 shadow-xl">
                    <figure>
                      <img src={picture} className="h-[200px]" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{name}</h2>
                      <p>Price :{price}</p>
                      <p>
                        <Rating
                          style={{ maxWidth: 180 }}
                          value={rating}
                          readOnly
                        />
                      </p>
                      <div className="card-actions justify-end">
                        <Link to={`/toy/${_id}`}>
                          {" "}
                          <button onClick={()=> validation()} className="border px-6 py-2 rounded-xl  text-center border-[#5eb4ba] hover:bg-[#5eb4ba] text-black transition-all duration-500 relative overflow-hidden ">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ShopByCategory;
