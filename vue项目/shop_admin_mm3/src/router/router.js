import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login.vue'
import Home from '@/components/home/Home.vue'
import Users from '@/components/users/Users.vue'
import Roles from '@/components/roles/Roles.vue'
import Rights from '@/components/rights/Rights.vue'

Vue.use(Router)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [
        {path: '/users', component: Users},
        {path: '/roles', component: Roles},
        {path: '/rights', component: Rights}
      ]
    }
  ]
})
