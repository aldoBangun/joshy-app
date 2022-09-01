import axios from 'axios'
import { store } from '../app/store'
import { setLoading } from '../features/slices/loading'

const dispatch = store.dispatch

axios.defaults.baseURL = process.env.REACT_APP_API_URL

const select = state => state.auth.token

const listener = () => {
  const token = select(store.getState())
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

store.subscribe(listener)

axios.interceptors.request.use((config) => {
  dispatch(setLoading(true))
  return config
  
}, (error) => {
  dispatch(setLoading(false))
  return Promise.reject(error)
})

axios.interceptors.response.use((config) => {
  dispatch(setLoading(false))
  return config
  
}, (error) => {
  dispatch(setLoading(false))
  return Promise.reject(error)
})

export default axios