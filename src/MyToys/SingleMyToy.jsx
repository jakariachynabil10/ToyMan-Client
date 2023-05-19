import React from "react";
import { Link } from "react-router-dom";

const SingleMyToy = ({ toy, index }) => {
  const { available_quantity, name, price, seller, sub_category, _id } = toy;
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{seller}</td>
        <td>{name}</td>
        <td>{sub_category}</td>
        <td>${price}</td>
        <td>{available_quantity}</td>
        <td className="border  px-4 w-[30px]  py-1 rounded-xl text-black text-center bg-[#5eb4ba]">
          <Link> Update</Link>
        </td>
        <td className="border  px-4 w-[30px] py-1 rounded-xl text-black text-center bg-[#5eb4ba]">
          <Link> Delete </Link>
        </td>
      </tr>
    </>
  );
};

export default SingleMyToy;
