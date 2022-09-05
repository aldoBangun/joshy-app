import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../thunks/user";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: null
  },
  extraReducers: {
    [getUser.fulfilled]: (state, { payload }) => {
      state.user = payload
      state.error = null
    },
    [getUser.rejected]: (state, { payload }) => {
      state.user = null
      state.error = payload
    }
  },
});

export default userSlice.reducer;
