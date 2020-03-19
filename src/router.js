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
          path: '/searchguide',
          name: 'searchguide',
          component: () => import('./components/SearchGuide.vue'),
        },
        {
          path: '/addguide',
          name: 'addguide',
          component: () => import('./components/AddGuide.vue'),
        },
        {
          path: '/editguide',
          name: 'editguide',
          component: () => import('./components/EditGuide.vue'),
        },
        {
          path: '/deleteguide',
          name: 'deleteguide',
          component: () => import('./components/DeleteGuide.vue'),
        },
      ]
    }
  ]
})
