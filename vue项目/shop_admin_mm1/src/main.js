// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入公共css
import './css/index.css'

// 引入路由
import router from './router'

// 导航守卫
router.beforeEach((to, from, next) => {
  // console.log(from.path, to.path)
  // 判断访问的是不是登录页
  if (to.path === '/login') {
    next()
  } else {
    // 其他页面
    // 判断有没有登录过  登录过会有token值，否则就跳转到login
    let token = localStorage.getItem('token')
    token ? next() : next('/login')
  }
})

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
