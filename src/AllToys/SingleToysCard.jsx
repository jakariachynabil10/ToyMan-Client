import React from "react";
import { Link } from "react-router-dom";

const SingleToysCard = ({ toy, index }) => {
  const {
    available_quantity,
    name,
    price,
    seller,
    sub_category,
    _id,
    picture,
  } = toy;
  return (
    <>
      <tr>       
        <th>{index + 1}</th>
        <td>
        <div className="w-10 rounded-full">
          <img
            src={picture}
            className="rounded-full"
            // alt="Avatar Tailwind CSS Component"
          />
        </div>
        </td>
        <td>{seller}</td>
        <td>{name}</td>
        <td>{sub_category}</td>
        <td>${price}</td>
        <td>{available_quantity}</td>
        <td className="border  px-4 w-[30px]  py-1 rounded-xl text-black text-center bg-[#5eb4ba]">
          <Link to={`/toy/${_id}`}> View Details</Link>
        </td>
      </tr>
    </>
  );
};

export default SingleToysCard;
