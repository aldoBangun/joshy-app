import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const register = createAsyncThunk('users/register', async (user, { rejectWithValue }) => {
  try {
    await axios.post('/auth/register', user)
    const response = await axios.post('/auth/login', user)
    return response?.data?.token
  } catch (err) {
    if (err?.response?.status === 400) return rejectWithValue('Email already registered!')
    return rejectWithValue(err?.response?.data?.message)
  }
})

export const login = createAsyncThunk('users/login', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post('/auth/login', user)
    return response?.data?.token
  } catch(err) {
    return rejectWithValue(err?.response?.data?.message)
  }
})