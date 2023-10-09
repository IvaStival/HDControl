import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosHelper from "../../../../utils/axios-helper";

import { backend_url, backend_port } from "../../../../utils/constants";

const _axios = new AxiosHelper(`${backend_url}:${backend_port}`);

const auth = createAsyncThunk(
  "user/auth",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          credentials: "include",
          "Content-Type": "application/json",
        },
      };
      const { data } = await _axios.get("/user/isauth", config);
      return data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export { auth };
