import { createSlice } from "@reduxjs/toolkit";

import { createLoc } from "./actions/createLoc";
import { getLoc } from "./actions/getLoc";
import { updateLoc } from "./actions/updateLoc";

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
        state.data = action.payload.id;
      })
      .addCase(createLoc.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateLoc.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateLoc.fulfilled, (state, action) => {
        state.status = "idle";

        state.data = action.payload.id;
      })
      .addCase(updateLoc.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getLoc.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getLoc.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(getLoc.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default locSlice.reducer;
