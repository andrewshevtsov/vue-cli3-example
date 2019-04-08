import axios from 'axios'

const getToken = 'TEST_TOKEN_1234567890'

const instance = axios.create({
  baseURL: 'http://localhost:3004/',
  headers: {
    Authorization: `Bearer ${getToken}`
  }
})

export default instance
