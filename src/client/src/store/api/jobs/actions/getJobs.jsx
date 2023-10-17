import { createAsyncThunk } from "@reduxjs/toolkit";

import AxiosHelper from "../../../../utils/axios-helper";
import { backend_url, backend_port } from "../../../../utils/constants";

const _axios = new AxiosHelper(`${backend_url}:${backend_port}`);

const getJobs = createAsyncThunk(
  "job/getjobs",
  async (userData, { rejectedWithValue }) => {
    try {
      const config = {
        headers: {
          credentials: "include",
          "Content-Type": "application/json",
        },
      };

      const { data } = await _axios.get("/job/jobs", {}, config);

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectedWithValue.response.data.message;
      } else {
        return rejectedWithValue(error.message);
      }
    }
  }
);

export { getJobs };
