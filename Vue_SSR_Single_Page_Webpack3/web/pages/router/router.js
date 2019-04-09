import Vue from "vue"
import Router from "vue-router"
import demo from './demo'
Vue.use(Router)

export function createRouter() {
  const router = new Router({
    mode: 'history',  // router 默认是 hash 的方式，hash 不重新渲染页面， 我们采用vue-ssr 每次切换路由都需要重新返回页面，所以需要history
    routes: [
      ...demo
    ]
  })
  return router
}