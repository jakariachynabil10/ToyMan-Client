import "./App.css";

import Banner from "./Banner/Banner";
import Collection from "./Collection/Collection";
import Discount from "./Discount/Discount";
import EasierToInvest from "./EasierToInvest/EasierToInvest";
import ExtraCard from "./ExtraCard/ExtraCard";
import Gallery from "./Gallery/Gallery";
import HowItWorks from "./HowItWorks/HowItWorks";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import TopBrands from "./TopBrands/TopBrands";

function App() {
  return (
    <>
      <div className="lg:pb-5">
        <Banner></Banner>
      </div>
      <div className="lg:px-10 overflow-hidden">
        <Gallery></Gallery>
        <ShopByCategory></ShopByCategory>
        <ExtraCard></ExtraCard>
        <Collection></Collection>
        <HowItWorks></HowItWorks>
        <EasierToInvest></EasierToInvest>
        <TopBrands></TopBrands>
        <Discount></Discount>
      </div>
    </>
  );
}

export default App;
