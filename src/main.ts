import { createApp, ref } from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = ''
axios.interceptors.request.use(config => {
  config.params = { ...config.params, icode: '' }
  return config
})

const app = createApp(App)

const c = () => {
  console.log(2113245648646)
}
app.config.globalProperties.$http = c
app.use(router)
app.use(store)
app.provide('testP', ref(0))
app.provide('fn', () => {
  console.log('我是测试方法')
})
app.mount('#app')
