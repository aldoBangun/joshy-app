import { configureStore } from "@reduxjs/toolkit";
// feature
import testimonialReducer from "../feature/TestimonialSlice";
import profileReducer from "../feature/ProfileSlice";

export const store = configureStore({
  reducer: {
    testimonial: testimonialReducer,
    profile: profileReducer,
  },
});
