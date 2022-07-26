import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import axios from "axios";
const data = 2;
// const config = {
//   headers: {
//     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImVtYWlsIjoid2FuamFmYXJAZ21haWwuY29tIiwicHJvZmlsZVBpY3R1cmUiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9ub2N0dXJuY2xvdWQvaW1hZ2UvdXBsb2FkL3YxNjU4NzM4Mjg5L3dtZ3V5ZWdob2lweGl6ZGx2bnJrLmpwZyIsImNvdmVySW1hZ2UiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9ub2N0dXJuY2xvdWQvaW1hZ2UvdXBsb2FkL3YxNjU4NzM4MjkwL2p1ZmJpZmg3dm1md201eG52aWpoLmpwZyIsInJvbGVJZCI6MiwiaWF0IjoxNjU4NzcwNzIzLCJleHAiOjE2NTg4NTcxMjN9.cJuPy17NePB5_waoj2L6px2Df-edaUIbF4fVRCmRQ98`,
//   },
// };

// get profile candidate
export const getProfile = createAsyncThunk("profiles/getProfile", async () => {
  const response = await axios.get(`http://localhost:8000/profile/1`);
  console.log(response.data);
  return response.data;
});
// add work place candidate
export const saveWorkPlace = createAsyncThunk(
  "profiles/saveWorkPlace",
  async ({ position, companyName, startDate, endDate, description }) => {
    const response = await axios.post(
      `http://localhost:8000/profile/1/experiences`,
      {
        position,
        companyName,
        startDate,
        endDate,
        description,
      }
    );
    return response.data;
  }
);
// add portofolio candidate
export const savePortofolio = createAsyncThunk(
  "profiles/savePortofolio",
  async ({ appName, link, type, appPicture }) => {
    const response = await axios.post(
      `http://localhost:8000/profile/1/portofolios`,
      {
        appName,
        link,
        type,
        appPicture,
      },
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    return response.data;
  }
);
// update profile picture
export const updateProfilePicture = createAsyncThunk(
  "profiles/updateProfilePicture",
  async ({ id = 1, profilePicture }) => {
    const response = await axios.patch(
      `http://localhost:8000/profile/${id}`,
      {
        id: 1,
        profilePicture,
      },
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    return response.data;
  }
);
// update profile candidate
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
