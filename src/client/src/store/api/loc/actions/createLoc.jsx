import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosHelper from "../../../../utils/axios-helper";

import { backend_url, backend_port } from "../../../../utils/constants";

const _axios = new AxiosHelper(`${backend_url}:${backend_port}`);

const createLoc = createAsyncThunk(
  "loc/new",
  async ({ data }, { rejectedWithValue }) => {
    try {
      const config = {
        headers: {
          credentials: "include",
          "Content-Type": "application/json",
        },
      };

      await _axios.post("/loc/new", { data }, config);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectedWithValue(error.response.data.message);
      } else {
        return rejectedWithValue(error.message);
      }
    }
  }
);

export { createLoc };
