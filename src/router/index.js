import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

import Index from '../components/Index'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
  ],
})
