import { API_STORAGE_URL } from "../../api/API_DATA";
import moment from "moment/moment";
import React from "react";

const Profile = ({ user, created_at }) => {
  return (
    <div className="flex items-center">
      <img
        src={API_STORAGE_URL + user.picture}
        className="w-[50px] h-[50px] rounded-full"
        alt=""
      />
      <div className="flex flex-col text-sm justify-center ml-2">
        <span className="font-semibold">{user.username}</span>
        <span className="text-gray">{moment(created_at).fromNow()}</span>
      </div>
    </div>
  );
};

export default Profile;
