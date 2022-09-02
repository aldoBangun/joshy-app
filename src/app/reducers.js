import { combineReducers } from "@reduxjs/toolkit";
import auth from "../features/slices/auth";
import profile from "../feature/ProfileSlice"
import loading from "../features/slices/loading";
import currentUser from "../features/slices/currentUser";
import portofolio from '../features/slices/portofolio'

const reducers = combineReducers({
  auth,
  profile,
  loading,
  currentUser,
  portofolio
})

export default reducers;