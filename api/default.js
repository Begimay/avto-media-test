import axios from 'axios'

axios.defaults.baseURL = process.env.baseAPI

export const HTTP = axios.create({
  baseURL: process.env.baseAPI,
  headers: {
    'Content-type': 'application/json'
  }
})
