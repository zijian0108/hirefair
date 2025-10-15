import { createRouter, createWebHashHistory } from 'vue-router'

import { Home } from '../pages/home/home'
import { Login } from '../pages/login/login'
import { t } from '../plugins/locale'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: t('page.home.title'),
        keepAlive: true,
        requiresAuth: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: t('page.login.title')
      }
    }
  ]
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'hirefair'
})

export default router
