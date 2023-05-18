import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useEffect } from "react";
import SingleCategory from "./SingleCategory";

const ShopByCategory = () => {
  const [marvels, setMarvels] = useState([]);
  const [avengers, setAvengers] = useState([]);
  const [starWars, setStarWars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4300/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].Marvels);
        setAvengers(data[0].Avengers);
        setStarWars(data[0].StarWars);
        setMarvels(data[0].Marvels);
      });
  }, []);

  return (
    <>
      <h1 className="text-center font-bold font-serif text-4xl my-16">
        Shop By Category
      </h1>
      <Tabs>
        <TabList>
          <Tab>Marvels</Tab>
          <Tab>Avengers</Tab>
          <Tab>Star Wars</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mx-16 lg:mx-4 mt-10 font-serif">
            {marvels.map((marvel) => (
              <SingleCategory marvel={marvel}></SingleCategory>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mx-16 lg:mx-4 mt-10 font-serif">
            {avengers.map((marvel) => (
              <SingleCategory marvel={marvel}></SingleCategory>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mx-16 lg:mx-4 mt-10 font-serif">
            {starWars.map((marvel) => (
              <SingleCategory marvel={marvel}></SingleCategory>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ShopByCategory;
