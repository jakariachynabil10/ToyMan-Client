import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = (
    <>
      <li className="hover:text-blue-700 font-bold">
        <Link to="/">Home</Link>
      </li>

      <li className="hover:text-blue-700 font-bold">
        <Link to="/allToys">All toys</Link>
      </li>

      <li className="hover:text-blue-700 font-bold">
        <Link to="/myToys">My toys</Link>
      </li>

      <li className="hover:text-blue-700 font-bold">
        <Link to="/addToys">Add toys</Link>
      </li>

      <li className="hover:text-blue-700 font-bold">
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar  shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {items}
            </ul>
          </div>
         <Link to='/' className="flex items-center gap-1 text-4xl font-bold"> <img src="https://i.ibb.co/yg12D0d/toyman-2.webp" className="w-[50px]" alt="" /> <span className="text-blue-400">Toy</span> <span className="text-pink-400">Man</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu    menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/login"
            className="border px-7 py-2  border-rose-400 hover:bg-rose-400 text-black hover:text-white font-semibold"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
