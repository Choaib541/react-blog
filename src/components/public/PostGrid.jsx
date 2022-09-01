import React, { useEffect } from "react";
import PostCard from "./PostCard";
import Title from "../Title";
import PostGridSide from "./PostGridSide";

const PostGrid = ({ posts, categories }) => {
  useEffect(() => {
    console.log(posts);
  }, []);

  return (
    <div className="">
      <div className="lg:grid lg:grid-cols-12 gap-5 px-4 lg:px-0 pb-4">
        <div className="lg:col-start-1 lg:col-end-10 ">
          <Title title="Latest Posts" />
          <div className="grid  lg:grid-cols-3 gap-2">
            {/*------------------- Looping through posts -------------------*/}
            {posts.data.map((e) => (
              <PostCard
                key={e.id}
                cover={e.cover}
                title={e.title}
                username={e.user.username}
                description={e.description}
                created_at={e.created_at}
                userPicture={e.user.picture}
              />
            ))}
          </div>
        </div>
        {/*------------------- Post Grid Side -------------------*/}
        <PostGridSide categories={categories} />
      </div>
    </div>
  );
};

export default PostGrid;
