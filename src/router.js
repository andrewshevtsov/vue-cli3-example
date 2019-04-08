import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/edit:id',
      name: 'edit',
      component: () => import('@/views/EditUser.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/Users.vue')
    }
  ]
})
