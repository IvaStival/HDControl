import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosHelper from "../../../../utils/axios-helper";
import { backend_url, backend_port } from "../../../../utils/constants";

const _axios = new AxiosHelper(`${backend_url}:${backend_port}`);

const createHd = createAsyncThunk(
  "hd/new",
  async (
    { title, size, code, is_home, qrcode, type },
    { rejectedWithValue }
  ) => {
    try {
      const config = {
        headers: {
          credentials: "include",
          "Content-Type": "application/json",
        },
      };

      console.log(qrcode);
      const { data } = await _axios.post(
        "/hds/new",
        { title, size, code, is_home, qrcode, type },
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

export { createHd };
