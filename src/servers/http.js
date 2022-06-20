import axios from 'axios'
import apiDomain from '../../api-domain.json'

const commonUrl = apiDomain[GLOBAL_ENV.APP_ENV]
console.log("🚀 ~ file: http.js ~ line 5 ~ commonUrl", commonUrl)

const httpInstance = axios.create({
  baseURL: commonUrl,
  timeout: 30000,
})

// 添加请求拦截器
httpInstance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
httpInstance.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default httpInstance
