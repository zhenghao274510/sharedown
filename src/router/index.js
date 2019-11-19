import Vue from 'vue'
import Router from 'vue-router'
import Share from '@/pages/share'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'share',
      component: Share
    }
  ]
})