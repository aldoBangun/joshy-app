import { combineReducers } from "@reduxjs/toolkit";
import auth from "../features/slices/auth";
import profile from "../feature/ProfileSlice"
import loading from "../features/slices/loading";
import currentUser from "../features/slices/currentUser";
import portofolio from '../features/slices/portofolio'
import experience from "../features/slices/experience";
import user from '../features/slices/user'
import notification from "../features/slices/notification";

const reducers = combineReducers({
  auth,
  profile,
  loading,
  currentUser,
  portofolio,
  experience,
  user,
  notification
})

export default reducers;