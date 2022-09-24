import React from "react";

const CategoriesSkelton = ({ categories }) => {
  return (
    <div className="flex text-center bg-dark-blue rounded p-8 flex-wrap">
      <span className="bg-skel animate-pulse w-[40%] h-[30px]  rounded mr-1 mb-1"></span>
      <span className="bg-skel animate-pulse w-[30%] h-[30px]  rounded mr-1 mb-1"></span>
      <span className="bg-skel animate-pulse w-[50%] h-[30px]  rounded mr-1 mb-1"></span>
      <span className="bg-skel animate-pulse w-[40%] h-[30px]  rounded mr-1 mb-1"></span>
      <span className="bg-skel animate-pulse w-[30%] h-[30px]  rounded mr-1 mb-1"></span>
      <span className="bg-skel animate-pulse w-[30%] h-[30px]  rounded mr-1 mb-1"></span>
      <span className="bg-skel animate-pulse w-[50%] h-[30px]  rounded mr-1 mb-1"></span>
    </div>
  );
};

export default CategoriesSkelton;
