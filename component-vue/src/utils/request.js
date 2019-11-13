import axios from 'axios'
import {
  MessageBox,
  Message
} from 'element-ui'
// import store from '@/store'
// import {
//   getToken
// } from '@/utils/auth'
import {
  checkStatus
} from '@/static/request'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: '', // url = base url + request url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 60000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // config.headers['Accept'] = 'application/json'
    // if (store.getters.token) {
    //   config.headers['Authorization'] = getToken()
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const {
      config = {}, data: res = {}
    } = response
    const {
      code,
      status,
      message = null
    } = res
    const {
      headers = {}
    } = config
    const {
      returnAll = false
    } = headers
    const result = (code || code === 0) ? code : status
    if (returnAll) {
      return res
    }
    if (result !== 200 && result !== 0) {
      Message({
        message: message || 'error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(res.message || 'error')
    } else {
      const {
        data = {}, token = null
      } = res
      let dataSource = null
      if (token) {
        dataSource = {
          token,
          data
        }
      } else {
        dataSource = data
      }
      return dataSource
    }
  },
  error => {
    // console.log(error.response) // for debug
    const newErr = checkStatus(error.response)
    const {
      status = false
    } = newErr
    if (status) {
      return {}
    } else {
      return Promise.reject(newErr)
    }
  }
)

export default service
