import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const UpdateToy = () => {
    const {user} = useContext(AuthContext)

    const updateToys = useLoaderData()
    console.log(updateToys)
    const {
        _id,
        picture,
        available_quantity,
        details,
        name,
        price,
        rating,
        seller,
        sub_category,
        email
      } = updateToys;

    const handleUpdateToy = (e) => {
        e.preventDefault();
    
        const form = e.target;
        const name = form.name.value;
        const SellerName = form.sellerName.value;
        const email = form.SellerEmail.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;

        const updateToys = {
            name, 
            seller : SellerName,
            email,
            available_quantity : quantity,
            picture : photo,
            sub_category : category,
            price,
            rating,
            details
        }

        const url = `http://localhost:4300/toys/${_id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToys)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Toys Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                form.reset()
            }
        })
    
      };
  return (
    <>
      <div className="bg-[#F4F3F0] py-2">
        <h1 className="text-center font-bold text-4xl py-10">Update Toys</h1>
        <div className="px-24">
          <form onSubmit={handleUpdateToy}>
            <div className="lg:flex mb-8">
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text">Toy Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Toy Name"
                    defaultValue={name}
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
              <div className="form-control lg:w-1/2 lg:ml-4">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Available Quantity"
                    defaultValue={available_quantity}
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
            </div>

            <div className="lg:flex mb-8">
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="sellerName"
                    placeholder="Seller Name"
                    defaultValue={seller}
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
              <div className="form-control lg:w-1/2 lg:ml-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    name="SellerEmail"
                    placeholder="Seller Email"
                    defaultValue={email}
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
            </div>

            <div className="lg:flex mb-8">
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select name="category" defaultValue={sub_category} className="input input-bordered w-full">
                  required
                  <option value="">Select an option</option>
                  <option>Marvel Toys</option>
                  <option>Avengers Toys</option>
                  <option>Star Wars Toys</option>
                </select>
              </div>
              <div className="form-control lg:w-1/2 lg:ml-4">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <label className="input-group">
                  <input
                    type="url"
                    name="photo"
                    placeholder="Photo URL"
                    defaultValue={picture}
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
            </div>
            <div className="lg:flex mb-8">
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <label className="input-group relative">
                  <span className="input-group-addon">$</span>
                  <input
                    type="number"
                    name="price"
                    placeholder="$00"
                    defaultValue={price}
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
              <div className="form-control lg:w-1/2 lg:ml-4">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    defaultValue={rating}
                    className="input input-bordered w-full"
                    min="0"
                    max="5"
                    required
                  />
                </label>
              </div>
            </div>

            <div className="mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <label className="input-group">
                  <textarea
                    className="input input-bordered w-full"
                    required
                    name="details"
                    defaultValue={details}
                    placeholder="Enter description"
                  ></textarea>
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Update Toy"
              className="border w-full p-5 rounded-xl text-white text-center bg-slate-600 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateToy;
