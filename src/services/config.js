import axios from 'axios'

const api = axios.create({
  baseURL: 'https://locool-backend.onrender.com/api',
  // baseURL: 'http://localhost:3000/api',
})

export default api

