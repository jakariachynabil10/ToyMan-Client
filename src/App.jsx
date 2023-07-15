import "./App.css";

import Banner from "./Banner/Banner";
import Collection from "./Collection/Collection";
import ExtraCard from "./ExtraCard/ExtraCard";
import Gallery from "./Gallery/Gallery";
import HowItWorks from "./HowItWorks/HowItWorks";
import ShopByCategory from "./ShopByCategory/ShopByCategory";

function App() {
  return (
    <>
      <div className="lg:pb-5">
        <Banner></Banner>
      </div>
      <div className="lg:px-10">
        <Gallery></Gallery>
        <ShopByCategory></ShopByCategory>
        <ExtraCard></ExtraCard>
        <Collection></Collection>
        <HowItWorks></HowItWorks>
      </div>
    </>
  );
}

export default App;
