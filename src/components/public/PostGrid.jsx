import React from "react";
import PostCard from "./PostCard";
import Title from "../Title";
import PostGridSide from "./PostGridSide";

const PostGrid = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:grid lg:grid-cols-12 gap-5 px-4 lg:px-0 pb-4">
        <div className="lg:col-start-1 lg:col-end-10 ">
          <Title title="Latest Posts" />
          <div className="grid  lg:grid-cols-3 gap-2">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
        <PostGridSide />
      </div>
    </div>
  );
};

export default PostGrid;
