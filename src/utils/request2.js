import router from '@/router'
import store from '@/store'
import axios from 'axios'
import { Message } from 'element-ui'

const instance = axios.create({
  // http://172.27.160.166:18080/api
  // http://127.0.0.1:18080
  // http://121.196.29.182:19011
  baseURL: process.env.VUE_APP_BASE_API2,
  timeout: 10000,
  headers: {}
})

instance.interceptors.request.use((config) => {
  config.headers.sessionToken = sessionStorage.getItem('sessionToken')
  return config
}, (err) => {
  window.console.log(err)
  return Promise.reject(err)
})

instance.interceptors.response.use((res) => {
  if (res.data.return_code !== 20000) {
    Message.close()
    Message({
      message: res.data.return_msg || 'Error',
      type: 'error',
      duration: 3000
    })
    return res.data
  } else if(res.data.return_code === 50008 || res.data.return_code === 50012 || res.data.return_code === 50014) {
    sessionStorage.removeItem('sessionToken')
    sessionStorage.removeItem('activeMenu')
    location.reload()
  }else {
    return res.data
  }
}, (err) => {
  Message({
    message: err.message,
    type: 'error',
    duration: 3000
  })
  if(err.response.status === 401) {
    store.commit('layout/SAVE_ACTIVE_MENU', 0)
    store.commit('layout/SAVE_LAYOUT', [])
    sessionStorage.removeItem('activeMenu')
    router.push('/login')
  }
  return Promise.reject(err)
})

export default instance
