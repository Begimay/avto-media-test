import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

export const HTTP = axios.create({
  baseURL: process.env.baseAPI,
  headers: {
    'Content-type': 'application/json'
  }
})
