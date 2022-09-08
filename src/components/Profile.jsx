import Title from "./Title";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_user, update_user } from "../store/features/UserSlice";
import { useState, useEffect } from "react";
import { api } from "../api";

const Profile = () => {
  /*_____________ Hooks _____________*/
  const user = useSelector(get_user);
  const [mutated_data, setMutated_data] = useState({});

  /*_____________ useEffect _____________*/

  /*_____________ Functions _____________*/
  function add_mutated_data(key, value) {
    setMutated_data({ ...mutated_data, [key]: value });
  }

  function submit_data() {
    async function update_user() {}
  }

  /*_____________ JSX _____________*/
  return (
    <div className="h-[calc(100vh_-_60px)] mt-[60px] flex items-center justify-center">
      <div className="bg-dark-blue w-full mx-4 p-4 max-w-xl">
        <Title title={"Welcome Back " + user.username} />
        <form>
          <div className="flex items-center gap-2 ">
            <input
              defaultValue={user.firstname}
              onChange={(e) => add_mutated_data("firstname", e.target.value)}
              className="input-control mb-2 w-full"
              placeholder="First name"
              type="text"
            />
            <input
              defaultValue={user.lastname}
              onChange={(e) => add_mutated_data("lastname", e.target.value)}
              className="input-control mb-2 w-full"
              placeholder="Last name"
              type="text"
            />
          </div>
          <div className="flex items-stretch gap-2  ">
            <input
              defaultValue={user.username}
              onChange={(e) => add_mutated_data("username", e.target.value)}
              className="input-control mb-2 w-full"
              placeholder="Username"
              type="text"
            />
            <button type="button" className="btn mb-2 btn-primary p-0 w-full">
              Upload Picture
            </button>
          </div>
          <input
            defaultValue={user.email}
            onChange={(e) => add_mutated_data("email", e.target.value)}
            className="input-control mb-2 w-full"
            placeholder="Email Address"
            type="text"
          />
          <div className="flex items-center gap-2 ">
            <input
              onChange={(e) => add_mutated_data("password", e.target.value)}
              className="input-control mb-2 w-full"
              placeholder="Password"
              type="text"
            />
            <input
              onChange={(e) =>
                add_mutated_data("password_confirmed", e.target.value)
              }
              className="input-control mb-2 w-full"
              placeholder="Password Confirmation"
              type="text"
            />
          </div>
          <button className="btn btn-success w-full">Update</button>
        </form>
        <div className="bg-darker-blue p-4 mt-4 rounded">
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default Profile;
