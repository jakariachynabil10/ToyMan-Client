import React from "react";
import {Link} from "react-router-dom"
const Login = () => {
  return (
    <>
      <div className="hero font-serif min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img
              src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1684398986~exp=1684399586~hmac=ed2f88eb991d23526e05ac34766b90a7bb9e22f017eae373228b0aa5187c9100"
              className="w-[70%] ml-16"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form>
                <div className="form-control">
                  <h1 className="text-3xl font-bold">Login now!</h1>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link to='/register' className="label-text-alt link link-hover">
                   Create Your Account
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-accent">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
