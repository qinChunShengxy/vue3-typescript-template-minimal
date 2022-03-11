import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: '',
  timeout: 60000,
})

// 前置拦截器
service.interceptors.request.use(
  (config) => {
    const token = 'wwssww'
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// 后置拦截器
service.interceptors.response.use(
  (response) => {
    if (response.data.code === 403) {
      ElMessage.error('登录用户会话过期,请重新登录!')
    }
    return response
  },
  (error) => {
    ElMessage.error(error)
    return Promise.reject(error)
  }
)

export default axios
