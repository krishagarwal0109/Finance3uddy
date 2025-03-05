import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: !!localStorage.getItem("access"),
  accessToken: localStorage.getItem("access") || null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("access", action.payload);
      state.isAuthenticated = true;
      state.accessToken = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("access");
      state.isAuthenticated = false;
      state.accessToken = null;
      state.user = null;
    },
    setAuthorizedUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
