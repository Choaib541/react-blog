import React, { useEffect, useState } from "react";
import PostGrid from "./PostGrid";
import { useSelector, useDispatch } from "react-redux";
import {
  fetch_posts,
  get_value as get_posts_value,
} from "../../store/features/PostsSlice";
import {
  fetch_categories,
  get_value as get_categories_value,
} from "../../store/features/CategorySlice";

const Posts = () => {
  /*_______ [Hooks] _______*/
  const posts = useSelector(get_posts_value);
  const categories = useSelector(get_categories_value);
  const dispatch = useDispatch();

  /*_______ [UseEffects] _______*/
  useEffect(() => {
    dispatch(fetch_posts());
    dispatch(fetch_categories());
    console.log(posts);
  }, []);

  /*_______ [Events Functions] _______*/
  function handle_change() {}

  /*_______ [JSX] _______*/
  return (
    <div className="container mx-auto pt-[60px]">
      <div className="bg-dark-blue rounded p-2 mt-4 mx-4 lg:mx-0">
        <input
          onChange={(event) => {
            handle_change(event.target.value);
          }}
          className="input-control w-full"
          placeholder="Search..."
          type="text"
        />
      </div>
      {/* <PostGrid posts={posts} categories={categories.data} /> */}
    </div>
  );
};

export default Posts;
