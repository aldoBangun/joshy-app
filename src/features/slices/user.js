import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../thunks/user";

const userSlice = createSlice({
  name: "user",
  initialState: {
    coverImage:
      null,
    description:
      "A Frontend developer who invested his time to learn JavaScript related stuff.",
    domicile: "Kupang",
    email: "aldo@gmail.com",
    github: "github.com/aldobangun",
    id: 1,
    instagram: "instagram.com/aldo_bagun",
    job: "Frontend Developer",
    name: "Aldo Bangun state",
    profilePicture:
      "null",
    roleId: 2,
    skills: '["React","VueJS","Bootstrap","HTML5","CSS3"]',
    userId: 1,
    workPlace: "Home",
  },
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      console.log('stateAwal', state);
      state = action.payload;
      console.log('stateAkhir',state)
    },
  },
});

export default userSlice.reducer;
