import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [navState, setnavState] = useState(false);
  function Handle_Show() {
    setnavState(!navState);
  }

  return (
    <div
      className={`h-[60px] fixed transition delay-[0.4] ease-in-out top-0 w-full bg-dark-blue`}
    >
      {/* Container */}
      <div className="container mx-auto flex justify-between p-4 relative">
        {/* Brand */}
        <div className="">
          <Link to="/" className="font-bold text-primary text-2xl">
            CAMADO
          </Link>
        </div>
        <div
          onClick={() => {
            Handle_Show();
          }}
          className="cursor-pointer lg:hidden"
        >
          <HiMenuAlt3 className="text-xl" />
        </div>
        {/* links */}
        <div
          className={`absolute top-0 right-0 mt-[60px]  rounded  p-[5px] lg:p-0 mr-4 lg:bg-transparent transition delay-[0.4] ease-in-out opacity-0 pointer-events-none shadow-md lg:shadow-transparent lg:static lg:opacity-100 lg:pointer-events-auto bg-darker-blue lg:m-0 ${
            navState && "opacity-100 pointer-events-auto"
          } `}
        >
          <ul className="flex flex-col text-center  lg:flex-row ">
            <li className="px-[10px] py-[5px] hover:bg-gray hover:text-darker-blue rounded lg:p-0 lg:ml-5 lg:hover:bg-transparent lg:hover:text-white  ">
              <Link to="/">Home</Link>
            </li>
            <li className="px-[10px] py-[5px] mb-1 hover:bg-gray hover:text-darker-blue rounded lg:p-0 lg:ml-5 lg:hover:bg-transparent lg:hover:text-white ">
              <Link to="/posts">Posts</Link>
            </li>
            <li className="px-[10px] py-[5px] mb-1 hover:bg-gray hover:text-darker-blue rounded lg:p-0 lg:ml-5 lg:hover:bg-transparent lg:hover:text-white ">
              <Link to="/about">About</Link>
            </li>
            <li className="px-[10px] py-[5px] mb-1 hover:bg-gray hover:text-darker-blue rounded lg:p-0 lg:ml-5 lg:hover:bg-transparent lg:hover:text-white ">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-[10px] py-[5px] mb-1 hover:bg-gray hover:text-darker-blue rounded lg:p-0 lg:ml-5 lg:hover:bg-transparent lg:hover:text-white ">
              <Link to="/login">Login</Link>
            </li>
            <li className="px-[10px] py-[5px] mb-1 hover:bg-gray hover:text-darker-blue rounded lg:p-0 lg:ml-5 lg:hover:bg-transparent lg:hover:text-white ">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
