import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'

export const getNotification = createAsyncThunk('notification/getNotification', async (userId, { rejectWithValue }) => {
  try {
    const responseHires = await axios.get(`/profile/${userId}/hires`)
    const hires = responseHires?.data

    const hiresWithCompanyDetails = hires.map(async (item) => {
      const response = await axios.get(`/profile/${item.recruiterProfilesId}`)
      const recruiter = response?.data

      return {...recruiter, ...item}
    })

    return await Promise.all(hiresWithCompanyDetails)
  } catch (err) {
    return rejectWithValue(err?.response?.data?.message || 'Something went wrong')
  }
})

const notificationAdapter = createEntityAdapter({
  selectId: (notification => notification.id)
})

const initialState = {
  loading: false,
  error: null
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState: notificationAdapter.getInitialState(initialState),
  extraReducers: {
    [getNotification.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getNotification.fulfilled]: (state, { payload }) => {
      notificationAdapter.setAll(state, payload)
      state.loading = false
      state.error = null
    },
    [getNotification.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = null
    }
  }
})

export const notificationSelector = notificationAdapter.getSelectors(state => state.notification)
export default notificationSlice.reducer