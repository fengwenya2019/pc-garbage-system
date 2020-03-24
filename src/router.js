import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '/guidemanage',
          name: 'guidemanage',
          component: () => import('./components/GuideManage.vue'),
        },
        {
          path: '/catamanage',
          name: 'catamanage',
          component: () => import('./components/CataManage.vue'),
        },
        {
          path: '/locationmanage',
          name: 'locationmanage',
          component: () => import('./components/LocationManage.vue'),
        },
        {
          path: '/sitemanage',
          name: 'sitemanage',
          component: () => import('./components/SiteManage.vue'),
        },
        {
          path: '/quasta',
          name: 'quasta',
          component: () => import('./components/QuaSta.vue'),
        },
        {
          path: '/chart',
          name: 'chart',
          component: () => import('./components/Chart.vue'),
        },
        {
          path: '/publish',
          name: 'publish',
          component: () => import('./components/Publish.vue'),
        },

      ]
    }
  ]
})
