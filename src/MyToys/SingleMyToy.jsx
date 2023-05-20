import React from "react";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { FaRegTimesCircle } from "react-icons/fa";

const SingleMyToy = ({ toy, index, handleDelete }) => {
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
        <td className="flex gap-4 items-center">
          <Link to={`/updateToys/${_id}`}>
            {" "}
            <button>
              <BsFillPencilFill></BsFillPencilFill>
            </button>
          </Link>{" "}
          <button onClick={()=> handleDelete(_id)}>
            <FaRegTimesCircle></FaRegTimesCircle>
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleMyToy;
