import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosHelper from "../../../../utils/axios-helper";
import { backend_url, backend_port } from "../../../../utils/constants";

const _axios = new AxiosHelper(`${backend_url}:${backend_port}`);

const updateJob = createAsyncThunk(
  "job/update",
  async ({ id, title, hdIds }, { rejectedWithValue }) => {
    try {
      const config = {
        headers: {
          credentials: "include",
          "Content-Type": "application/json",
        },
      };

      console.log(id, title);
      const { data } = await _axios.patch(
        `/job/update/${id}`,
        { title, hdIds },
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

export { updateJob };
