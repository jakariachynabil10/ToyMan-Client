import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("Marvel Toys");

  const url = `http://localhost:4300/toys?sub_category=${category}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [category]);

  return (
    <>
      <h1 className="text-center font-bold  text-4xl my-16">
        Shop By Category
      </h1>
      <Tabs>
        <TabList>
          <Tab onClick={() => setCategory("Marvel Toys")}>Marvels</Tab>
          <Tab onClick={() => setCategory("Avengers Toys")}>Avengers</Tab>
          <Tab onClick={() => setCategory("Star Wars Toys")}>Star Wars</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mx-16 lg:mx-4 mt-10 ">
            {toys.map((toy) => {
              const { name, picture, rating, price } = toy;
              return (
                <>
                  <div className="card card-compact w-[90%] transition-transform duration-300 transform-gpu hover:scale-110 shadow-xl">
                    <figure>
                      <img src={picture} className="h-[200px]" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{name}</h2>
                      <p>Price :{price}</p>
                      <p>Rating :{rating}</p>
                      <div className="card-actions justify-end">
                        <Link>
                          {" "}
                          <button className="btn btn-primary">
                            View Details{" "}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mx-16 lg:mx-4 mt-10 ">
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
                      <p>Rating :{rating}</p>
                      <div className="card-actions justify-end">
                        <Link>
                          {" "}
                          <button className="btn btn-primary">
                            View Details{" "}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mx-16 lg:mx-4 mt-10 ">
            {toys.map((toy) => {
              const { name, picture, rating, price } = toy;
              return (
                <>
                  <div className="card card-compact w-[90%] transition-transform duration-300 transform-gpu hover:scale-110 shadow-xl">
                    <figure>
                      <img src={picture} className="h-[200px]" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{name}</h2>
                      <p>Price :{price}</p>
                      <p>Rating :{rating}</p>
                      <div className="card-actions justify-end">
                        <Link>
                          {" "}
                          <button className="btn btn-primary">
                            View Details{" "}
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
