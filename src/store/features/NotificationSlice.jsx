import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    status: null,
    message: null,
  },
};

const NotificationSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {
    store: (state, { payload }) => {
      state.value = payload;
    },
    destory: (state, { payload }) => {
      state.value = {
        status: null,
        message: null,
      };
    },
  },
});
export const get_data = (state) => state.notification.value;
export const { store, destory } = NotificationSlice.actions;
export default NotificationSlice.reducer;
