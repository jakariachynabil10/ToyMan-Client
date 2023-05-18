import React from "react";
import { Link } from "react-router-dom";

const SingleToysCard = ({ toy, index }) => {
  const { available_quantity, name, price, seller, sub_category, _id } = toy;
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{seller}</td>
        <td>{name}</td>
        <td>{sub_category}</td>
        <td>{price}</td>
        <td>{available_quantity}</td>
        <td className="border  px-6 py-2 rounded-xl text-white text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          <Link> View Details</Link>
        </td>
      </tr>
    </>
  );
};

export default SingleToysCard;
