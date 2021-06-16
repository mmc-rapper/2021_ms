import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login.vue'
import Home from '@/components/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
