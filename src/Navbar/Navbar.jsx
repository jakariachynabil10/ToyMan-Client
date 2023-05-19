import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const items = (
    <>
      <li className="hover:text-blue-700 font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-blue-700 font-bold">
        <Link to="/allToys">All toys</Link>
      </li>
      {user?.email ? (
        <>
          <li className="hover:text-blue-700 font-bold">
            <Link to="/myToys">My Toys</Link>
          </li>
        </>
      ) : (
        ""
      )}

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
      <div className="navbar lg:px-16 shadow-xl">
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
          <Link to="/" className="flex items-center gap-1 text-4xl font-bold">
            {" "}
            <img
              src="https://i.ibb.co/yg12D0d/toyman-2.webp"
              className="w-[50px]"
              alt=""
            />{" "}
            <span className="text-blue-400">Toy</span>{" "}
            <span className="text-pink-400">Man</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu    menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div data-tip={user?.displayName} className="w-10 rounded-full tooltip  tooltip-bottom mr-5">
                <img   className="rounded-full" src={user?.photoURL} />
              </div>
              <button
                className="border px-7 py-2  border-[#5eb4ba] hover:bg-[#5eb4ba] text-black hover:text-black font-semibold"
                onClick={handleLogOut}
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="border px-7 py-2  border-[#5eb4ba] hover:bg-[#5eb4ba] text-black hover:text-black font-semibold"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
