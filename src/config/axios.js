import axios from "axios";
import { store } from "../app/store";

const globalState = store.getState()
const token = globalState?.auth?.token

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use((config) => {
  if(config.category !== "AUTH" && token) {
    config.headers = {
      'Authorization' : `Bearer ${token}`
    }
  }

  return config
}, (error) => {
  return error
});

axios.interceptors.response.use((config) => {
  return config
}, (error) => {
  return error
});

export default axios;