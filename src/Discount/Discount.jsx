import React from 'react';
import image from "../../public/image/bg-2_d13cf859-f214-4d46-8ee0-d8ca3b503805.png"

const Discount = () => {
    return (
        <div className='mt-20 flex justify-center relative'>
        <div
          className='absolute top-0 left-0 w-full h-full'
          style={{
            backgroundImage: 'linear-gradient(rgba(254, 191, 0, 1), rgba(254, 191, 0, 1))',
            opacity: 0.8, // Adjust the opacity as needed
          }}
        />
        <img src={image} className='' alt='' />
        <h1 className='font-bold text-black absolute top-56 text-5xl'>15% Discount</h1>
        <p className='font-medium text-black absolute top-72 text-4xl'>On All Kid's Education Toys</p>
        <button className='border rounded-2xl bg-white border-white text-black font-bold transform duration-300 hover:scale-x-110 px-8 py-4 absolute top-96'>Shop Now</button>

      </div>
    );
};

export default Discount;