import Vue from 'vue'
import VueRouter from 'vue-router'
import { isLogin } from 'service/auth'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  scrollBehaviors (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      name: 'login',
      path: '/',
      component: require('views/login')
    },
    {
      path: '/dashboard',
      component: require('components/layout/main'),
      meta: { requireAuth: true },
      children: [
        {
          name: 'dashboard',
          path: '',
          component: require('components/views/dashboard')
        }
      ]
    },
    {
      path: '/article',
      component: require('components/layout/main'),
      meta: { requireAuth: true },
      children: [
        {
          name: 'article',
          path: '',
          component: require('components/views/article')
        },
        {
          name: 'post_article',
          path: 'post',
          component: require('components/views/article/post'),
        },
        {
          name: 'view_article',
          path: 'view/:id',
          component: require('components/views/article/view'),
        },
        {
          name: 'view_update',
          path: 'post/:id',
          component: require('components/views/article/update'),
        },
      ]
    },
    { path: '*', redirect: { name: 'dashboard' }}
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!isLogin()) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
