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
          path: '/home/guidemanage',
          name: 'guidemanage',
          component: () => import('./components/GuideManage.vue'),
        },
        {
          path: '/home/catamanage',
          name: 'catamanage',
          component: () => import('./components/CataManage.vue'),
        },
        {
          path: '/home/locationmanage',
          name: 'locationmanage',
          component: () => import('./components/LocationManage.vue'),
        },
        {
          path: '/home/sitemanage',
          name: 'sitemanage',
          component: () => import('./components/SiteManage.vue'),
        },
        {
          path: '/home/quasta',
          name: 'quasta',
          component: () => import('./components/QuaSta.vue'),
        },
        {
          path: '/home/chart',
          name: 'chart',
          component: () => import('./components/Chart.vue'),
        },
        {
          path: '/home/publish',
          name: 'publish',
          component: () => import('./components/Publish.vue'),
        },
        {
          path: '/home/history',
          name: 'history',
          component: () => import('./components/ReportHistory.vue'),
        },
      ]
    }
  ]
})
