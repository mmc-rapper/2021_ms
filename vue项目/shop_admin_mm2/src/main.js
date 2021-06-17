// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'

// 引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入公共css
import '@/css/common.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

// 导航守卫
router.beforeEach((to, from, next) => {
  // 1. 判断要去的页面是不是登录页，如果是的话就next()
  if (to.path === '/login') {
    next()
  } else {
    // 2. 如果是其他页面，就获取token，判断token有没有值，如果没有就跳转到登录页
    let token = localStorage.getItem('token')
    token ? next() : next('/login')
  }
  // console.log(to.path, from.path)
})

/* eslint-disable*/
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
