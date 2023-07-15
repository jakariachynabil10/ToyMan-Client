import React from "react";
import image1 from "../../public/image/grid-1.png";
import image2 from "../../public/image/grid-2.png";
import image3 from "../../public/image/grid-3.png";

const EasierToInvest = () => {
  return (
    <>
      <div>
        <h1 className="text-center font-bold text-4xl mt-16">
          It's never been easier to <br /> invest in your kid's toys
        </h1>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="2000"
          className="flex flex-row-reverse  items-center mt-10"
        >
          <img src={image1} className="relative w-[480px] h-[480px]" alt="" />

          <div className="border border-white shadow-lg rounded-xl py-5 px-7 h-[200px] absolute w-1/2 bg-white left-40">
            <h1 className="font-bold text-2xl p-2">
              Toys are all your baby need better toys for better growth
            </h1>
            <p className="pb-10 px-5">
              Facilisis mauris sit amet massa vitae tortor condimentum lacinia.
              Faucibus interdum posuere lorem ipsum dolor. Eu tincidunt tortor
              aliquam nulla facilisi cras. Venenatis lectus magna.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="2000"
          className="flex   items-center mt-10"
        >
          <img src={image2} className="relative w-[480px] h-[480px]" alt="" />

          <div className="border border-white shadow-lg rounded-xl py-5 px-7 h-[200px] absolute w-1/2 bg-white right-40">
            <h1 className="font-bold text-2xl p-2">
              Creative modern wooden toys for kids development
            </h1>
            <p className="pb-10 px-5">
              Ut faucibus pulvinar elementum integer enim neque volutpat.
              Blandit volutpat maecenas volutpat blandit aliquam etiam erat.
              Elit scelerisque mauris pellentesque pulvinar pellentesque
              tristique.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="2000"
          className="flex flex-row-reverse  items-center mt-10"
        >
          <img src={image3} className="relative w-[480px] h-[480px]" alt="" />

          <div className="border border-white shadow-lg rounded-xl py-5 px-7 h-[200px] absolute w-1/2 bg-white left-40">
            <h1 className="font-bold text-2xl p-2">
              Wooden toys that will delight your little one a lot
            </h1>
            <p className="pb-10 px-5">
              Nisl vel pretium lectus quam id leo in vitae. Eros in cursus
              turpis massa. Blandit massa enim nec dui nunc. Turpis in eu mi
              bibendum neque egestas. Viverra nam libero justo laoreet sit amet
              cursus sit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EasierToInvest;
