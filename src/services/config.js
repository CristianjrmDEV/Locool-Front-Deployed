import axios from 'axios'

const api = axios.create({
  baseURL: 'https://locool-backend.onrender.com/api',
})

export default api

