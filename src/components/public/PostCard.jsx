import React from "react";
import { AiFillEye } from "react-icons/ai";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import { API_STORAGE_URL } from "../../api/API_DATA";

/**
 * Card Text Component
 */
const Cardpara = ({ paragraph, id, title = false }) => {
  return (
    <div className="flex items-stretch pt-[15px]">
      <div className="bg-primary w-[4px] rounded-full"></div>
      {title ? (
        <span
          to={`/post/${id}`}
          className={`ml-2 w-[calc(100%_-_4px)] hover:underline  cursor-pointer ${
            title && "text-lg font-semibold"
          }  `}
        >
          {paragraph}
        </span>
      ) : (
        <span
          className={`ml-2 w-[calc(100%_-_4px)]  ${
            title && "text-lg font-semibold"
          }`}
        >
          {paragraph}
        </span>
      )}
    </div>
  );
};

/**
 * Actual Card Component
 */
const PostCard = ({
  username,
  cover,
  title,
  description,
  userPicture,
  created_at,
  id,
}) => {
  return (
    <div className="p-2 bg-dark-blue rounded shadow-sm">
      {/* ------------ Cover ------------ */}
      <div>
        <img
          className="h-[250px] w-full object-cover rounded"
          src={API_STORAGE_URL + cover}
          alt=""
        />
      </div>
      {/* ------------ Content ------------*/}
      <div>
        <Link to={`/posts/${id}`}>
          <Cardpara title={true} paragraph={title} />
        </Link>
        <Cardpara paragraph={description.substr(0, 100) + "..."} />
        <div className="pt-[15px] flex justify-between items-center ">
          {/* ------------ User ------------ */}
          <div className="user flex items-stretch">
            <img
              src={API_STORAGE_URL + userPicture}
              className="w-[45px] h-[45px] rounded-full"
              alt=""
            />
            <div className="ml-[10px]">
              <span className="block">{username}</span>
              <span className="text-gray text-sm font-semibold">
                {moment(created_at).fromNow()}
              </span>
            </div>
          </div>
          {/* ------------ Views ------------ */}
          <div className="text-gray flex items-center px-[10px]">
            <AiFillEye className="bg-dark-blue" />
            <span className="text-sm ml-1">19</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
