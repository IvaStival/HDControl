import { createSlice, current } from "@reduxjs/toolkit";

import { createJob } from "./actions/createJob";
import { getJobs } from "./actions/getJobs";
import { updateJob } from "./actions/updateJob";
import { deleteJob } from "./actions/deleteJob";

const initialState = {
  status: "idle",
  error: false,
  message: null,
  data: null,
  jobHds: [],
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    updateJobList: (state, param) => {
      state.data.data = [...current(state).data.data, param.payload];
      // console.log([...current(state).data.data, param.payload]);
    },
    updateJobHds: (state, param) => {
      console.log(current(state).jobHds);
      state.jobHds = param.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(createJob.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getJobs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(updateJob.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.status = "idle";
        // state.data = action.payload.data;
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(deleteJob.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.status = "idle";
        // state.data = action.payload.data;
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default jobSlice.reducer;
export const { updateJobList, updateJobHds } = jobSlice.actions;
export const selectJobs = (state) => state.job.data;
export const selectJobStatus = (state) => state.job.status;
export const selectJobHds = (state) => state.job.jobHds;
