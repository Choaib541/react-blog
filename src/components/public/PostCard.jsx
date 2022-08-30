import React from "react";
import placeholder from "../../assets/placeholder.jpg";
import { AiFillEye } from "react-icons/ai";

const Cardpara = ({ paragraph, title = false }) => {
  return (
    <div className="flex items-stretch pt-[15px]">
      <div className="bg-primary w-[4px] rounded-full"></div>
      <span
        className={`ml-2 w-[calc(100%_-_4px)] ${
          title && "text-lg font-semibold"
        }`}
      >
        {paragraph}
      </span>
    </div>
  );
};

const PostCard = () => {
  return (
    <div className="p-2 bg-dark-blue rounded shadow-sm">
      <div>
        <img
          className="h-[250px] w-full object-cover rounded"
          src={placeholder}
          alt=""
        />
      </div>
      {/* Content */}
      <div>
        <Cardpara
          title={true}
          paragraph="Python is not the best for evrything"
        />
        <Cardpara
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          magni, molestias ipsum repellat cupiditate vitae ad aut omnis sunt
          soluta?"
        />
        <div className="pt-[15px] flex justify-between items-center ">
          <div className="user flex items-stretch">
            <img
              src={placeholder}
              className="w-[45px] h-[45px] rounded-full"
              alt=""
            />
            <div className="ml-[10px]">
              <span className="block">Mourach Choaib</span>
              <span className="text-gray text-sm">August 18 2003</span>
            </div>
          </div>
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
