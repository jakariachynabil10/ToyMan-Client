import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingelDetails = () => {
    const data = useLoaderData()
    console.log(data)
    const {_id , picture, available_quantity, details, name, price, rating, seller} = data
    return (
       <>
            <div className="card mx-auto mt-10 w-[50%] transition-transform duration-300 transform-gpu hover:scale-110 shadow-xl">
                    <figure>
                      <img src={picture} className="h-[200px]" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{name}</h2>
                      <p>Price :{price}</p>
                      <p>
                        <Rating
                          style={{ maxWidth: 180 }}
                          value={rating}
                          readOnly
                        />
                      </p>
                    </div>
                  </div>
       </>
    );
};

export default SingelDetails;