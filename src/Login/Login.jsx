import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((users) => {
        const user = users.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className="hero  min-h-screen bg-base-200">
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
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <h1 className="text-3xl font-bold">Login now!</h1>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link
                      to="/register"
                      className="label-text-alt link link-hover"
                    >
                      Create Your Account
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-accent hover:border-rose-400 hover:bg-rose-400 hover:text-white"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <hr />

              <button
                onClick={()=> handleGoogleSignIn()}
                className="flex items-center justify-center bg-[#0a031c] text-white mt-4 gap-2 border px-6 py-2 rounded-xl bg"
              >
                {" "}
                <FaGoogle></FaGoogle> Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
