import axios from 'axios'

export default axios.create({
  baseURL: 'http://192.168.2.74:8080/api'
})