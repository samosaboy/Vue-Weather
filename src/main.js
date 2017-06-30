// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

import store from './store'
import App from './App'
import router from './router'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

axios.defaults.params = { appid: '50ea24e8454f290b1331066ae9c8f63a' }
axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
