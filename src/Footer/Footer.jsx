import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className=" p-10 mt-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white font-serif font-semibold">
        <div className="footer">
          <div>
            <Link to="/" className="flex items-center gap-1 text-4xl font-bold">
              {" "}
              <img
                src="https://i.ibb.co/yg12D0d/toyman-2.webp"
                className="w-[50px]"
                alt=""
              />{" "}
              <span className="text-blue-800">Toy</span>{" "}
              <span className="text-pink-600">Man</span>
            </Link>
          </div>
          <div>
            <span className="footer-title">Toys</span>
            <Link to='/allToys' className="link link-hover">All Toys</Link>
            <Link to='/addToys' className="link link-hover">Add Toys</Link>
            <Link to='/myToys' className="link link-hover">MyToys</Link>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover">Jobs</Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
          </div>
        </div>
        <div className="footer items-center p-4  text-neutral-content">
          <div className="items-center grid-flow-col">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>Copyright © 2023 - All right reserved</p>
          </div>
          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <Link to='https://github.com/jakariachynabil10'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#181717"
                width="24px"
                height="24px"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.88 8.14 6.86 9.48.5.09.68-.21.68-.48v-1.7c-2.79.61-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.91 1.56 2.39 1.11 2.98.85.09-.65.36-1.1.66-1.35-2.32-.26-4.76-1.16-4.76-5.16 0-1.14.41-2.07 1.05-2.8-.11-.26-.46-1.32.1-2.75 0 0 .87-.28 2.85 1.06.83-.23 1.72-.35 2.6-.35s1.77.12 2.6.35c1.97-1.34 2.85-1.06 2.85-1.06.56 1.43.21 2.49.1 2.75.65.73 1.05 1.66 1.05 2.8 0 4-2.45 4.89-4.77 5.15.37.32.71.96.71 1.95v2.88c0 .27.18.57.69.48C19.12 20.14 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100077571240039">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
