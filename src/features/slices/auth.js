import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { authLogin } from "../thunks/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, loggedInUser: {} },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.loggedInUser = {};
    },
  },
  extraReducers: {
    [authLogin.fulfilled]: (state, action) => {
      state.token = action.payload;
      state.loggedInUser = jwtDecode(action.payload);
    }
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;