import { useState } from "react";
import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useEffect } from "react";
import Banner from "./Banner/Banner";

function App() {

  // const [marvels, setMarvels] = useState([])
  // const [avengers, setAvengers] = useState([])
  // const [starWars, setStarWars] = useState([])
  // useEffect( ()=>{
  //   fetch('http://localhost:4300/categories')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data[0].Marvels)
  //     setAvengers(data[0].Avengers)
  //     setStarWars(data[0].StarWars)
  //     setMarvels(data[0].Marvels)
  //   })
  // }, [])

  // return (
  //   <>
  //     <Tabs>
  //       <TabList>
  //         <Tab>Marvels</Tab>
  //         <Tab>Avengers</Tab>
  //         <Tab>Star Wars</Tab>
  //       </TabList>

  //       <TabPanel>
  //     {
  //       marvels.map(m => console.log(m))
  //     }
  //       </TabPanel>
  //       <TabPanel>
  //         <h2>Any content 2</h2>
  //       </TabPanel>
  //       <TabPanel>
  //         <h2>Any content 3</h2>
  //       </TabPanel>
  //     </Tabs>
  //   </>
  // );

  return <>
     <Banner></Banner>
  </>
}

export default App;
