import { createSlice } from "@reduxjs/toolkit";

import { createLoc } from "./actions/createLoc";

const initialState = {
  loading: false,
  error: false,
  fulfilled: false,
  rejected: false,
  message: null,
  data: null,
};

const locSlice = createSlice({
  name: "loc",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createLoc.pending, (state) => {
        state.loading = true;
      })
      .addCase(createLoc.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.fulfilled = true;
        state.data = payload;
      })
      .addCase(createLoc.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default locSlice.reducer;
