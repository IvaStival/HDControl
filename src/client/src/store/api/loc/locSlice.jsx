import { createSlice } from "@reduxjs/toolkit";

import { createLoc } from "./actions/createLoc";

const initialState = {
  status: "idle",
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
        state.status = "loading";
      })
      .addCase(createLoc.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(createLoc.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default locSlice.reducer;
