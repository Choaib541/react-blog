import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";

const initialState = {
  value: {
    data: [],
  },
  status: [],
  errors: null,
};

export const fetch_posts = createAsyncThunk(
  "posts/fetch_posts",
  async (search = false) => {
    const response = await api({
      method: "get",
      url: "/posts" + (search ? `?search=${search}` : ""),
    });
    return response.data;
  }
);

const PostsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    create: (state, action) => {
      state.posts = action.payload;
    },
    store: (state, action) => {},
    update: (state, action) => {},
    destory: (state, action) => {},
  },
  extraReducers: {
    [fetch_posts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetch_posts.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.status = "success";
    },
    [fetch_posts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const get_value = (state) => state.posts.value;
export const get_status = (state) => state.posts.status;

export const { store, update, destory, create } = PostsSlice.actions;

export default PostsSlice.reducer;
