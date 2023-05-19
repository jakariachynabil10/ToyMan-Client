import "./App.css";

import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
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
      </div>
    </>
  );
}

export default App;
