import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import axios from 'axios'
// 引入自定义axios.js
import "./axios.js"
// 全局注册 
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './permission.js' // 路由拦截
// use
Vue.use(mavonEditor)


//引用全局
Vue.prototype.$axios = axios 
Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
