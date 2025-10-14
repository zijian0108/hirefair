import { createRouter, createWebHashHistory } from 'vue-router'

import { Home } from '../pages/home/home'
import { Login } from '../pages/login/login'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: '首页',
        keepAlive: true,
        requiresAuth: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: '登录'
      }
    }
  ]
})

export default router
