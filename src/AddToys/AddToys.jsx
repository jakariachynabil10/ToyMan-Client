import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddToys = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (e) => {
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

    const newToys = {
      name,
      available_quantity: quantity,
      seller: SellerName,
      email,
      sub_category: category,
      details,
      picture : photo,
      price,
    };
    console.log(newToys);

    const url = "http://localhost:4300/addToy";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <>
      <div className="bg-[#F4F3F0] py-2">
        <h1 className="text-center font-bold text-4xl py-10">ADD Toys</h1>
        <div className="px-24">
          <form onSubmit={handleAddToy}>
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
                    defaultValue={user?.displayName}
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
                    defaultValue={user?.email}
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
                <select name="category" className="input input-bordered w-full">
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
                    placeholder="Enter description"
                  ></textarea>
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Add Toy"
              className="border w-full p-5 rounded-xl text-white text-center bg-slate-600 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddToys;
