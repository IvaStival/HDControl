import { createSlice, fetchBaseQuery } from "@reduxjs/toolkit";

import { login } from "./actions/login";
import { logout } from "./actions/logout";
import { auth } from "./actions/auth";

const initialState = {
  success: false,
  loading: false,
  userInfo: null,
  userToken: null,
  isAuth: false,
  message: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.isAuth = true;
        state.userInfo = payload;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = true;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isAuth = false;
        state.success = true;
        state.userInfo = payload;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = true;
      })
      .addCase(auth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(auth.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.isAuth = true;
        state.userInfo = payload;
      })
      .addCase(auth.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = true;
      });
  },
});

export const { setCredentials } = userSlice.actions;

export default userSlice.reducer;
