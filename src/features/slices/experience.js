import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from 'axios'

export const getUserExperiences = createAsyncThunk('experience/getUserExperience', async (userId) => {
  const response = await axios.get(`/profile/${userId}/experiences`)
  return response?.data
})

export const addUserExperience = createAsyncThunk('experience/addUserExperience', async (data) => {
  await axios.post(`/profile/${data.userId}/experiences`, data)
  const response = await axios.get(`/profile/${data.userId}/experiences`)
  return response?.data
})

const experienceAdapater = createEntityAdapter({
  selectId: (experience) => experience.id
})

const experienceSlice = createSlice({
  name: 'experience',
  initialState: experienceAdapater.getInitialState(),
  extraReducers: {
    [getUserExperiences.fulfilled]: (state, { payload }) => {
      experienceAdapater.setAll(state, payload)
    },
    [addUserExperience.fulfilled]: (state, { payload }) => {
      experienceAdapater.setAll(state, payload)
    }
  }
})

export const experienceSelector = experienceAdapater.getSelectors(state => state.experience)
export default experienceSlice.reducer