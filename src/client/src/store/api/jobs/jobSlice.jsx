import { createSlice, current } from "@reduxjs/toolkit";

import { createJob } from "./actions/createJob";
import { getJobs } from "./actions/getJobs";

const initialState = {
  status: "idle",
  error: false,
  message: null,
  data: null,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    updateJobList: (state, param) => {
      state.data.data = [...current(state).data.data, param.payload];
      // console.log([...current(state).data.data, param.payload]);
    },
    updateJobHdsInfo: (state, param) => {
      console.log(param);
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
      });
  },
});

export default jobSlice.reducer;
export const { updateJobList } = jobSlice.actions;
export const getJobsSelector = (state) => state.job.data;
