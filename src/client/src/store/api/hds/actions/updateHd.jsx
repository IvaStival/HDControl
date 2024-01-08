import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosHelper from "../../../../utils/axios-helper";
import { backend_url, backend_port } from "../../../../utils/constants";

const _axios = new AxiosHelper(`${backend_url}:${backend_port}`);

const updateHd = createAsyncThunk(
  "hds/updatehd",
  async ({ id, hdData }, { rejectedWithValue }) => {
    try {
      console.log(id);
      const config = {
        headers: {
          credentials: "included",
          "Content-Type": "application/json",
        },
      };

      const { data } = await _axios.patch(
        `/hds/hd/${id}`,
        { ...hdData },
        config
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectedWithValue(error.response.data.message);
      } else {
        return rejectedWithValue(error.message);
      }
    }
  }
);

export { updateHd };
