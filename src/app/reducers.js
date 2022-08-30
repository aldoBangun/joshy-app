import { combineReducers } from "@reduxjs/toolkit";
import auth from "../features/slices/auth";
import user from "../features/slices/user";

const reducers = combineReducers({
  auth,
  user
})

export default reducers;