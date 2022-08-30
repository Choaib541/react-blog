import React from "react";

const Title = ({ title }) => {
  return (
    <div className="flex items-stretch py-[20px]">
      <div className="bg-primary w-[4px] rounded-lg"></div>
      <span className="text-lg ml-[10px] font-semibold">{title}</span>
    </div>
  );
};

export default Title;
