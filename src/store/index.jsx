import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "./features/PostsSlice";
import CategorySlice from "./features/CategorySlice";

const store = configureStore({
  reducer: {
    posts: PostsSlice,
    categories: CategorySlice,
  },
});

export default store;
