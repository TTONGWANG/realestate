import axiso from 'axios'

const apiRequest = axiso.create({
  baseURL: "http://localhost:8800/api",
  withCredentials:true  //跨域请求是否需要凭证
})

export default apiRequest;