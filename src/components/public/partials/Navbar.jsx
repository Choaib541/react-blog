import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { is_connected } from "../../../store/features/UserSlice";
import { get_user, logout } from "../../../store/features/UserSlice";
import { store } from "../../../store/features/NotificationSlice";

const Navbar = () => {
  /*_____________ Hooks _____________*/
  const [navState, setnavState] = useState(false);
  const is_user_connected = useSelector(is_connected);
  const user = useSelector(get_user);
  const [show_avatar_options, setShow_avatar_options] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /*_____________ Functions _____________*/
  function Handle_Show() {
    setnavState(!navState);
  }

  const show_avatar_control = (e) => {
    setShow_avatar_options(!show_avatar_options);
  };

  const handle_logout = (e) => {
    dispatch(logout());
    dispatch(
      store({
        status: "success",
        message: "You Logged out successfully",
      })
    );
    navigate("/");
  };

  return (
    <div
      className={`h-[60px] fixed transition delay-[0.4] ease-in-out top-0 w-full bg-dark-blue`}
    >
      {/* Container */}
      <div className="container  mx-auto flex items-center justify-between py-2 px-4 relative">
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
          className={`absolute top-0 right-0 mt-[60px]  rounded  p-[5px] lg:p-0 mr-4 lg:bg-transparent transition delay-[0.4] ease-in-out opacity-0 pointer-events-none shadow-lg  lg:shadow-transparent lg:static lg:opacity-100 lg:pointer-events-auto bg-darker-blue lg:m-0 w-[180px] lg:w-auto  ${
            navState && "opacity-100 pointer-events-auto"
          } `}
        >
          <ul className="flex flex-col text-center  lg:flex-row items-center ">
            <li className="px-[10px] py-[5px]  rounded lg:p-0 lg:ml-5    ">
              <Link to="/">Home</Link>
            </li>
            <li className="px-[10px] py-[5px] mb-1   rounded lg:p-0 lg:ml-5   ">
              <Link to="/posts">Posts</Link>
            </li>
            <li className="px-[10px] py-[5px] mb-1   rounded lg:p-0 lg:ml-5   ">
              <Link to="/about">About</Link>
            </li>
            <li className="px-[10px] py-[5px] mb-1   rounded lg:p-0 lg:ml-5   ">
              <Link to="/contact">Contact</Link>
            </li>
            {!is_user_connected ? (
              <>
                <li className="px-[10px] py-[5px] mb-1   rounded lg:p-0 lg:ml-5   ">
                  <Link to="/auth/login">Login</Link>
                </li>
                <li className="px-[10px] py-[5px] mb-1   rounded lg:p-0 lg:ml-5   ">
                  <Link to="/auth/register">Register</Link>
                </li>
              </>
            ) : (
              <li className="px-[10px] py-[5px] mb-1  rounded lg:p-0 lg:ml-5 ">
                <div className="flex items-center flex-col">
                  <img
                    onClick={show_avatar_control}
                    className="rounded-full cursor-pointer w-[40px] h-[40px]"
                    src={"http://localhost/" + user.picture}
                    alt=""
                  />
                  <div
                    className={
                      "relative flex justify-center  " +
                      (show_avatar_options ? "" : "hidden")
                    }
                  >
                    <ul className="lg:absolute lg:bg-dark-blue lg:shadow-lg text-center lg:p-3 lg:rounded ">
                      <li className="mt-2 hover:bg-gray hover:text-dark-blue rounded">
                        <Link to={"/profile"}>Profile</Link>
                      </li>
                      <li className="mt-2 hover:bg-gray hover:text-dark-blue rounded">
                        <Link to={"/dashboard"}>Dashboard</Link>
                      </li>
                      <li
                        onClick={handle_logout}
                        className="mt-2 cursor-pointer hover:bg-gray hover:text-dark-blue rounded"
                      >
                        <span>Log out</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
