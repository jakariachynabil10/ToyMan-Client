import "./App.css";

import Banner from "./Banner/Banner";
import ShopByCategory from "./ShopByCategory/ShopByCategory";

function App() {
  return (
    <>
     <div className="lg:pb-5">
     <Banner></Banner>
     </div>
      <div className="lg:px-10">
      <ShopByCategory></ShopByCategory>
      </div>
    </>
  );
}

export default App;
