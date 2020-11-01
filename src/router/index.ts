import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import Index from "@/views/Login/index.vue"
import Login from "@/views/Login/Login.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: Index,
    children: [
      {
        path: '/',
        name: 'Login',
        component: Login
        
      },
      {
        path: 'error',
        name: 'Error',
        component: Home
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
