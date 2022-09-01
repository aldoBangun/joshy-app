import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUser = createAsyncThunk('currentUser/getUser', async (userId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/profile/${userId}`)
    return response?.data
  } catch(err) {
    return rejectWithValue(err?.response?.data?.message || 'Something went wrong')
  }
})

export const updateUser = createAsyncThunk('currentUser/updateUser', async (user, { rejectWithValue }) => {
  try {
    await axios.patch(`/profile/${user.userId}`, user, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  
    const response = await axios.get(`/profile/${user.userId}`)
    return response?.data
  } catch (err) {
    return rejectWithValue(err?.response?.data?.message || 'Something went wrong')
  }
})