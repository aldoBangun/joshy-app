import { combineReducers } from "@reduxjs/toolkit";
import auth from "../features/slices/auth";
import profile from "../feature/ProfileSlice"
import currentUser from "../features/slices/currentUser";
import loading from "../features/slices/loading";

const reducers = combineReducers({
  auth,
  profile,
  loading,
  currentUser
})

export default reducers;