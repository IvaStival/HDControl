import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosHelper from "../../../../utils/axios-helper";

import { backend_url, backend_port } from "../../../../utils/constants";

const _axios = new AxiosHelper(`${backend_url}:${backend_port}`);

const getHd = createAsyncThunk(
  "hds/gethd",
  async (id, { rejectedWithValue }) => {
    try {
      const config = {
        headers: {
          creadentials: "include",
          "Content-Type": "application/json",
        },
      };

      const { data } = await _axios.get(`/hds/hds/${id}`, {}, config);

      return data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectedWithValue(error.response.data.message);
      } else {
        return rejectedWithValue(error.message);
      }
    }
  }
);

export { getHd };
