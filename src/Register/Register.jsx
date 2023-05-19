import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const {createUser, nameAndUrl} = useContext(AuthContext)


    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const PhotoUrl = form.photourl.value
        console.log(name, email, password, PhotoUrl)

        createUser(email, password)
        .then(users => {
            const user = users.user
            console.log(user)
            form.reset()
            nameAndUrl(name, PhotoUrl)
            .then(()=>{
                console.log('profile Updated')
            })
            .catch(error => {
                console.log(error)
            })
        })
        .catch(error =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        })
    }


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
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <h1 className="text-3xl font-bold">Register now!</h1>
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    className="input input-bordered"
                  />
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
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <span className="label-text">PhotoUrl</span>
                  </label>
                  <input
                    type="url"
                    name="photourl"
                    placeholder="Photo Url"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover"
                    >
                    Have a Account?, Login Here 
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input className="btn btn-accent hover:border-rose-400 hover:bg-rose-400 hover:text-white" type="submit" value="Register"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
