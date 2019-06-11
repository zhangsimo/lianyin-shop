// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import flexible from 'flexible.js'
import './assets/style/iconfont/iconfont.css'
import './assets/style/base.css'
import './assets/style/border.css'
import 'mint-ui/lib/style.css'
/* eslint-disable */
import MintUI from 'mint-ui'
import store from './tool/index.js'
import axios from 'axios'
import { MessageBox } from 'mint-ui'
import Calendar from 'vue2-datepick'
// axios.defaults.baseURL = '/myapi'
Vue.prototype.$axios = axios
Vue.prototype.$messagebox = MessageBox
Vue.use(Calendar)
axios.interceptors.request.use(
  function(config) {
    // 添加token

    config.headers.token = sessionStorage.getItem('lianyin_token')

    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

Vue.use(MintUI)
flexible()
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
