import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosHelper from "../../../../utils/axios-helper";
import { backend_url, backend_port } from "../../../../utils/constants";

const _axios = new AxiosHelper(`${backend_url}:${backend_port}`);

const deleteHd = createAsyncThunk(
  "hd/delete",
  async (id, { rejectedWithValue }) => {
    try {
      const config = {
        headers: {
          credentials: "include",
          "Content-Type": "application/json",
        },
      };

      const { data } = await _axios._delete(`/hds/hd/${id}`, {}, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        console.log(error);
        return rejectedWithValue(error.response.data.message);
      } else {
        console.log(error);
        return rejectedWithValue(error.message);
      }
    }
  }
);

export { deleteHd };
