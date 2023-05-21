import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <img src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=740&t=st=1684656129~exp=1684656729~hmac=a4a7ea3c3a05b0fc9eec1eaf1804ecd33961f9a5b2a005060fa20bddd1bd71d7" />
        
          <Link to='/' className="bg-red-500 text-center text-white hover:bg-red-600 px-4 py-2 rounded">
            Back To Home Page
          </Link>
        
      </div>
    </>
  );
};

export default Error;
