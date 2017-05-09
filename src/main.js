// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import es6 from 'es6-promise'
import App from './App'
import router from './router'
import 'assets/stylus/index.styl'

// es6转换为es5
es6.polyfill()

// 关闭生产模式下的提示
Vue.config.productionTip = false

// 使用axios
Vue.prototype.$http = axios.create({
  baseURL: 'http://www.jiangfeather.com'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
