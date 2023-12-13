import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosHelper from "../../../../utils/axios-helper";
import { backend_url, backend_port } from "../../../../utils/constants";

const _axios = new AxiosHelper(`${backend_url}:${backend_port}`);

const updateLoc = createAsyncThunk(
  "loc/updateLoc",
  async ({ id, locData }, { rejectedWithValue }) => {
    try {
      const config = {
        headers: {
          credentials: "included",
          "Content-Type": "application/json",
        },
      };

      const { data } = await _axios.patch(
        `/locs/update/${id}`,
        { ...locData },
        config
      );

      console.log(data);
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

export { updateLoc };
