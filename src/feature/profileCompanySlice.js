import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import axios from "axios";

// add work place candidate
export const updateProfileCandidate = createAsyncThunk(
  "profiles/updateProfileCandidate",
  async ({ id = 1, name, job, domicile, workPlace, description, skills }) => {
    const response = await axios.patch(`http://localhost:8000/profile/${id}`, {
      id: 1,
      name,
      job,
      domicile,
      workPlace,
      description,
      skills,
    });
    return response.data;
  }
);

const profileEntity = createEntityAdapter({
  selectId: (profile) => profile.id,
});

const ProfileSlice = createSlice({
  name: "profile",
  initialState: profileEntity.getInitialState(),
  extraReducers: {
    [getProfile.fulfilled]: (state, action) => {
      profileEntity.setAll(state, action.payload);
    },
    [saveWorkPlace.fulfilled]: (state, action) => {
      profileEntity.addOne(state, {
        id: action.payload.id,
        adds: action.payload,
      });
    },
    [savePortofolio.fulfilled]: (state, action) => {
      profileEntity.addOne(state, {
        id: action.payload.id,
        addsPorto: action.payload,
      });
    },
    [updateProfileCandidate.fulfilled]: (state, action) => {
      profileEntity.updateOne(state, {
        id: action.payload.id,
        updates: action.payload,
      });
    },
    [updateProfilePicture.fulfilled]: (state, action) => {
      profileEntity.updateOne(state, {
        id: action.payload.id,
        updatePro: action.payload,
      });
    },
  },
});

export const profileSelector = profileEntity.getSelectors(
  (state) => state.profile
);

export default ProfileSlice.reducer;
