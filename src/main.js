import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
// import $ from "jquery"

Vue.config.productionTip = false
Vue.prototype.$api = "/api"; // 生产环境打包时
Vue.prototype.$http=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
