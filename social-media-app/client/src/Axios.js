import axios from 'axios'

export const makeRequest = axios.create({
  baseURL: 'http://localhost:5001/api',
  withCredentials: true
})