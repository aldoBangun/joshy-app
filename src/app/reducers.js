import { combineReducers } from "@reduxjs/toolkit";
import auth from "../features/slices/auth";
import user from "../features/slices/user";
import profile from "../feature/ProfileSlice"

const reducers = combineReducers({
  auth,
  user,
  profile
})

export default reducers;