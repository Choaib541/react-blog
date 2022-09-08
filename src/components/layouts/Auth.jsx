import { useSelector } from "react-redux";
import { get_token } from "../../store/features/UserSlice";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const token = useSelector(get_token);
  console.log(token);
  if (token) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <div className="flex items-center min-h-screen justify-center">
        <div className="bg-dark-blue p-4 rounded shadow-md w-full max-w-[450px]">
          <Outlet />
        </div>
      </div>
    );
  }
};

export default Auth;
