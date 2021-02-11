import Vue from 'vue'
import VueRouter from 'vue-router'
import UserProfile from '../views/UserProfile.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: UserProfile
  },
  {
    path: '/user/:id',
    component: UserProfile
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
