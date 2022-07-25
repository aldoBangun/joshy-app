import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authLogin = createAsyncThunk("auth/login", async (user) => {
  const response = await axios.post("/auth/login", user, {
    category: "AUTH"
  });
  return response.data.token;
});

export const authRegister = createAsyncThunk("auth/register", async (user) => {
  await axios.post("/auth/register", user, {
    category: "AUTH"
  });
});