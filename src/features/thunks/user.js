import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("user/getUser", async (id) => {
  const response = await axios.get(`/profile/${id}`);
  return response.data
});