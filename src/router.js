import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import EditUser from '@/views/EditUser.vue'
import Users from '@/views/Users.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditUser
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    }
  ]
})
