import axios from "axios";

const store = localStorage.getItem("persist:root")
let token = null

if(store) {
  const storeJSON = JSON.parse(store)
  const authJSON = JSON.parse(storeJSON.auth)
  token = authJSON.token
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use((config) => {
  if(config?.category !== "AUTH" && token) {
    config.headers = {
      Authorization : `Bearer ${token}`
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