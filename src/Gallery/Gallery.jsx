import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Gallery = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4300/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

 

  return (
    <>
    <h1 className="text-center my-6 text-5xl font-bold">Gallery</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 bg-gray-100 py-8 mx-auto px-4 lg:grid-cols-4 gap-4">
            {toys.map((toy) => {
              const { picture } = toy;
              return (
                <>
                  <div
                   data-aos="fade-up"
                   data-aos-duration="1000"
                    key={toy._id}
                    className="relative overflow-hidden rounded"
                  >
                    <img src={picture} className="w-full h-[200px]" />
                  </div>
                </>
              );
            })}
          </div>
    </>
  );
};

export default Gallery;
