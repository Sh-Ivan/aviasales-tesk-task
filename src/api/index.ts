import axios, { AxiosInstance } from 'axios'

export const API_URL = 'https://api.npoint.io'

const ticketApi: AxiosInstance = axios.create({
  baseURL: API_URL,
})

export default ticketApi
