import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from 'axios'

export const getUserPortofolios = createAsyncThunk('portofolio/getUserPortofolios', async (userId) => {
  const response = await axios(`/profile/${userId}/portofolios`)
  return response?.data
})

const portofolioAdapter = createEntityAdapter({
  selectId: (portofolio) => portofolio.portofolioId
})

const portofolioSlice = createSlice({
  name: 'portofolio',
  initialState: portofolioAdapter.getInitialState(),
  extraReducers: {
    [getUserPortofolios.fulfilled]: (state, { payload }) => {
      portofolioAdapter.setAll(state, payload)
    }
  }
})

export const portofolioSelector = portofolioAdapter.getSelectors(state => state.portofolio)
export default portofolioSlice.reducer