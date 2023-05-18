import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useEffect } from "react";
import SingleCategory from "./SingleCategory";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("Marvel Toys");
 

  const url = `http://localhost:4300/toys?sub_category=${category}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        console.log(data);
      });
  }, [category]);

  return (
    <>
      <h1 className="text-center font-bold font-serif text-4xl my-16">
        Shop By Category
      </h1>
      <Tabs>
        <TabList>
          <Tab onClick={() => setCategory("Marvel Toys")}>Marvels</Tab>
          <Tab onClick={() => setCategory("Avengers Toys")}>Avengers</Tab>
          <Tab onClick={() => setCategory("Star Wars Toys")}>Star Wars</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mx-16 lg:mx-4 mt-10 font-serif">
            {toys.map((toy) => {
              const { name, picture, rating, price } = toy;
              return (
                <>
                  <div className="card card-compact w-[90%]  shadow-xl">
                    <figure>
                      <img
                        src={picture}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mx-16 lg:mx-4 mt-10 font-serif">
          {toys.map((toy) => {
              const { name, picture, rating, price } = toy;
              return (
                <>
                  <div className="card card-compact w-[90%]  shadow-xl">
                    <figure>
                      <img
                        src={picture}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mx-16 lg:mx-4 mt-10 font-serif">
          {toys.map((toy) => {
              const { name, picture, rating, price } = toy;
              return (
                <>
                  <div className="card card-compact w-[90%]  shadow-xl">
                    <figure>
                      <img
                        src={picture}
                        className=""
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
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
