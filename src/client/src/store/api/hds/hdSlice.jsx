import { createSlice } from "@reduxjs/toolkit";

import { createHd } from "./actions/createHd";
import { getHds } from "./actions/getHds";
import { getHd } from "./actions/getHd";
import { updateHd } from "./actions/updateHd";
import { deleteHd } from "./actions/deleteHd";

const initialState = {
  status: "idle",
  error: null,
  data: null,
};

const hdSlice = createSlice({
  name: "hd",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createHd.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createHd.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload.data;
      })
      .addCase(createHd.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getHds.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getHds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(getHds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getHd.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getHd.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(getHd.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateHd.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateHd.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(updateHd.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteHd.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteHd.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(deleteHd.rejected, (state, action) => {
        state.status = "delete_failed";
        state.error = action.error.message;
      });
  },
});

export default hdSlice.reducer;
export const selectHds = (state) => state.hd.data;
export const selectHd = (state, id) => {
  console.log(state.hd.data.find((hd) => hd.id === id));
  //   state.hd.data.find((hd) => hd.id === id);
};
export const selectHdStatus = (state) => state.hd.status;
