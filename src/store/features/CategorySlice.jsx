import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";

export const fetch_categories = createAsyncThunk(
  "categories/fetch_categories",
  async () => {
    const response = await api({
      method: "get",
      url: "/categories",
    });
    return response.data;
  }
);

const initialState = {
  value: {
    data: [],
  },
  status: null,
  error: null,
};

const CategorySlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    create: (state, action) => {
      state.value.data = action.payload;
    },
  },
  extraReducers: {
    [fetch_categories.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetch_categories.fulfilled]: (state, action) => {
      state.status = "success";
      state.value = action.payload;
    },
    [fetch_categories.rejected]: (state, action) => {
      state.status = "fail";
    },
  },
});

export const get_value = (state) => state.categories.value;
export const get_status = (state) => state.categories.status;
export const get_error = (state) => state.categories.error;

export default CategorySlice.reducer;
