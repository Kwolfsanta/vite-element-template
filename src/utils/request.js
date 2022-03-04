import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的BASE_URL
  timeout: 5000
})

// request拦截器
service.interceptors.request.use(config => {
  // 发送请求之前做点啥
  if (store.getters.token) {
    config.headers['X-Token'] = getToken() //让每个请求携带token
  }
  return config
}, err => {
  // 如果请求失败了，做点啥
  console.log(err)
  Promise.reject(err)
})

// response拦截器
service.interceptors.response.use(
  res => res,
  err => {
    console.log('err', err);
    Message({
      message: err.message && err.message || '啊哦，可能请求有点问题，稍等一会儿再试试~',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(err)
  }
)

export default service
  