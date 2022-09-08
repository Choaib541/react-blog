import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    connected: false,
    user: {},
    token: null,
  },
};

const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, { payload }) => {
      state.value = { connected: true, ...payload };
      localStorage["token"] = payload.token;
    },
    logout: (state, { payload }) => {
      state.value = { connected: false, user: {}, token: null };
      delete localStorage["token"];
    },
    store: (state, { payload }) => {
      state.value = { connected: true, ...payload };
    },
    update_user: (state, { payload }) => {
      payload.password && delete payload.password;
      payload.password_confirmation && delete payload.password_confirmation;
      state.value.user = { ...state.value.user, ...payload };
    },
  },
});

export const get_data = (state) => state.user.value;
export const get_user = (state) => state.user.value.user;
export const get_token = (state) => state.user.value.token;
export const is_connected = (state) => state.user.value.connected;

export const { login, logout, store, update_user } = UserSlice.actions;
export default UserSlice.reducer;
