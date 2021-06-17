// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入公共样式
import '@/css/common.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 判断要去的页面是不是登录页，如果是的话就放行
  if (to.path === '/login') {
    next()
  } else {
  // 如果不行，就获取token判断有没有值，没有的话就跳转到login
    let token = localStorage.getItem('token')
    token ? next() : next('/login')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
