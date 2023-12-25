import axios from 'axios'
import { BASE_URL, TIME_OUT } from './config'

class MoonRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })
    this.instance.interceptors.response.use(
      res => {
        return res.data
      },
      err => {
        return err
      }
    )
  }
  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.instance.request({ ...config, method: 'GET' })
  }
  post(config) {
    return this.instance.request({ ...config, method: 'POST' })
  }
}

export default new MoonRequest(BASE_URL, TIME_OUT)
