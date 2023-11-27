import { createSlice, current } from "@reduxjs/toolkit";

import { createJob } from "./actions/createJob";
import { getJobs } from "./actions/getJobs";

const initialState = {
  loading: false,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.loading = true;
      })
      .addCase(createJob.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.fulfilled = true;
        state.data = payload;
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getJobs.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.fulfilled = true;
        state.data = payload;
      })
      .addCase(getJobs.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default jobSlice.reducer;
export const { updateJobList } = jobSlice.actions;
