import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const Test = () => import(/* webpackChunkName: "test" */'../views/Test.vue')
// const Demo = () => import(/* webpackChunkName: "demo" */'../views/Demo.vue')
import Demo from './demo'
export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior(to, from, savedPosition) {
      // return 期望滚动到哪个的位置
      if (savedPosition) {
        return savedPosition;
      }
      return { x: 0, y: 0 };
    },
    routes: [
      ...Demo
    ]
  })
}
