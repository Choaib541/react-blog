import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "./features/PostsSlice";
import CategorySlice from "./features/CategorySlice";
import UserSlice from "./features/UserSlice";
import NotificationSlice from "./features/NotificationSlice";

const store = configureStore({
  reducer: {
    posts: PostsSlice,
    categories: CategorySlice,
    user: UserSlice,
    notification: NotificationSlice,
  },
});

export default store;
