import axios from 'axios'

// 创建axios实例
const service = axios.create({
<<<<<<< HEAD
  baseURL: 'http://localhost:9001', // api 的 base_url
  timeout: 5000 // 请求超时时间
})

=======
  baseURL: 'http://localhost:9001', // api的base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    return res
  }
)

>>>>>>> 83b072bc705c2cc351085f3bde51ca5ce9fa0468
export default service
