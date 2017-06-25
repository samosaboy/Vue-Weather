// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueResource)

Vue.http.options.root = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/'
Vue.http.options.params = { appid: '50ea24e8454f290b1331066ae9c8f63a' }
Vue.http.interceptors.push((request, next) => {
  request.headers.set('Access-Control-Allow-Headers', 'Content-Type, Accept')
  request.headers.set('Access-Control-Allow-Methods', 'POST, GET')
  request.headers.set('Access-Control-Allow-Credentials', 'true')
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
