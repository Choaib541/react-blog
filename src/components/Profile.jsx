import Title from "./Title";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_user, update_user } from "../store/features/UserSlice";
import { useState, useEffect, useRef } from "react";
import { api } from "../api";
import { FaPen } from "react-icons/fa";
import { API_STORAGE_URL, API_URL } from "../api/API_DATA";
import { store } from "../store/features/NotificationSlice";

const Profile = () => {
  /*___________ State ___________*/
  const auth_user = useSelector(get_user);
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const inputFile = useRef();
  const [errors, setErrors] = useState({});

  /*___________ functions ___________*/
  const handle_picture = () => {
    inputFile.current.click();
  };

  const handle_file = () => {
    const data = new FormData();
    data.append("picture", inputFile.current.files[0]);
    data.append("_method", "patch");

    const fetch_data = async (data) => {
      try {
        const response = await api({
          method: "post",
          url: API_URL + "profile",
          data: data,
        });
        dispatch(
          store({
            status: "success",
            message: "Image Updated successfully",
          })
        );
        dispatch(
          update_user({
            picture: response.data.picture,
          })
        );
      } catch (err) {
        dispatch(
          store({
            status: "error",
            message: "Updating img failed",
          })
        );
      }
    };

    fetch_data(data);
  };

  function add_changes_to_data(element) {
    setData({ ...data, [element.name]: element.value });
  }

  const handle_data = () => {
    const send_data = async () => {
      try {
        await api({
          method: "patch",
          url: "/profile",
          data: data,
        });
        dispatch(
          store({
            status: "success",
            message: "Information is updated",
          })
        );
        dispatch(update_user(data));
      } catch (err) {
        setErrors(err.response.data.errors);
      }
    };
    if (Object.keys(data).length) {
      send_data();
    } else {
      dispatch(
        store({
          status: "error",
          message: "Noting to be updated",
        })
      );
    }
  };

  /*___________ useEffect ___________*/

  useEffect(() => {
    if (Object.keys(errors)) {
      Object.values(errors).forEach((element) => {
        element.forEach((e) => {
          dispatch(
            store({
              status: "error",
              message: e,
            })
          );
        });
      });
    }
  }, [errors, dispatch]);

  /*___________ JSX ___________*/
  return (
    <div className="min-h-[calc(100vh_-_60px)] flex items-center justify-center">
      <div className="bg-dark-blue p-4 pt-0 rounded">
        <Title title={"Update Profile"} />
        <div className="flex justify-center col-start-1 col-end-3 pb-5">
          <div
            className="relative cursor-pointer"
            onClick={() => {
              handle_picture();
            }}
          >
            <img
              className="w-[150px] h-[150px] rounded-full"
              src={API_STORAGE_URL + auth_user.picture}
              alt=""
            />
            <button className="absolute bottom-0 right-0 mb-1 mr-1 bg-primary drop-shadow-lg p-3 rounded-full ">
              <FaPen />
            </button>
          </div>
        </div>
        <input
          ref={inputFile}
          name="picture"
          type="file"
          onChange={() => {
            handle_file();
          }}
          className="hidden"
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handle_data();
          }}
          className="grid  grid-cols-2 gap-2"
        >
          <input
            onChange={(e) => add_changes_to_data(e.target)}
            className="input-control col-start-1 col-end-3"
            name="username"
            defaultValue={auth_user.username}
            autoComplete="off"
            placeholder="username..."
            type="text"
          />
          <input
            onChange={(e) => add_changes_to_data(e.target)}
            className="input-control"
            name="firstname"
            defaultValue={auth_user.firstname}
            placeholder="First Name..."
            type="text"
          />
          <input
            onChange={(e) => add_changes_to_data(e.target)}
            className="input-control"
            defaultValue={auth_user.lastname}
            name="lastname"
            placeholder="Last Name..."
            type="text"
          />
          <input
            onChange={(e) => add_changes_to_data(e.target)}
            className="input-control col-start-1 col-end-3"
            name="email"
            defaultValue={auth_user.email}
            placeholder="Email Address..."
            type="text"
          />
          <input
            onChange={(e) => {
              add_changes_to_data(e.target);
            }}
            className="input-control col-start-1 col-end-3"
            name="current_password"
            placeholder="Current Password..."
            type="password"
          />
          <input
            onChange={(e) => {
              add_changes_to_data(e.target);
            }}
            className="input-control"
            name="password"
            placeholder="Password..."
            type="password"
          />
          <input
            onChange={(e) => add_changes_to_data(e.target)}
            className="input-control "
            name="password_confirmation"
            placeholder="Password Confirmation..."
            type="password"
          />
          <button className="btn bg-success col-start-1 col-end-3">
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
