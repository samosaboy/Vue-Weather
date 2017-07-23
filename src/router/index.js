import Vue from 'vue'
import Router from 'vue-router'

import index from '../components/index'
import overlay from '../components/search/overlay'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: './search/search',
          name: 'overlay',
          comopnent: overlay,
        },
      ],
    },
  ],
})
