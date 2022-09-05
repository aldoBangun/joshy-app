import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("user/getUser", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/profile/${id}`);
    return response?.data
  } catch (err) {
    return rejectWithValue(err?.response?.data?.message || 'Something went wrong')
  }
});