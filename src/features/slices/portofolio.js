import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from 'axios'

export const getUserPortofolios = createAsyncThunk('portofolio/getUserPortofolios', async (userId) => {
  const response = await axios.get(`/profile/${userId}/portofolios`)
  return response?.data
})

export const addUserPortofolio = createAsyncThunk('portofolio/addUserPortofolio', async (data) => {
  await axios.post(`/profile/${data.userId}/portofolios`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  
  const response = await axios.get(`profile/${data.userId}/portofolios`)
  return response?.data
})

const portofolioAdapter = createEntityAdapter({
  selectId: (portofolio) => portofolio.id
})

const portofolioSlice = createSlice({
  name: 'portofolio',
  initialState: portofolioAdapter.getInitialState(),
  extraReducers: {
    [getUserPortofolios.fulfilled]: (state, { payload }) => {
      portofolioAdapter.setAll(state, payload)
    },
    [addUserPortofolio.fulfilled]: (state, { payload }) => {
      portofolioAdapter.setAll(state, payload)
    }
  }
})

export const portofolioSelector = portofolioAdapter.getSelectors(state => state.portofolio)
export default portofolioSlice.reducer