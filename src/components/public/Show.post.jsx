import { AiTwotoneEye } from "react-icons/ai";
import Title from "../Title";
import React from "react";
import Profile from "./Profile";

const ShowPost = ({ post }) => {
  return (
    <div className="lg:col-start-1 lg:col-end-10 ">
      <Title title={"Post"} />
      <div className="rounded bg-dark-blue p-4">
        {post ? (
          <div>
            <h1 className="text-3xl font-semibold">{post.title}</h1>
            <div className="flex flex-wrap py-4 text-darker-blue text-sm ">
              {post.categories.map((e) => (
                <a
                  key={e.id}
                  className="btn  bg-gray mr-2"
                  href={`/posts?search=${e.name}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  {e.name}
                </a>
              ))}
            </div>
            <div className="h-[350px] object-cover">
              {/* "http://localhost/" + post.cover */}
              <img
                className="rounded  max-h-full h-full w-full"
                src={"https://source.unsplash.com/random/1115x350"}
                alt=""
              />
            </div>
            <div className="my-2">{post.description}</div>
            <div>{post.content}</div>
            <hr className="block my-4 text-gray " />
            <div className="flex justify-between items-center">
              {/* User */}
              <Profile user={post.user} created_at={post.created_at} />
              <div className="flex items-center text-gray">
                <AiTwotoneEye />{" "}
                <span className="text-sm ml-1 font-semibold ">99</span>
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default ShowPost;
