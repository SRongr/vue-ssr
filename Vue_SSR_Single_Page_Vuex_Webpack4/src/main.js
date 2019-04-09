import Vue from 'vue'
import App from './App.vue'
import createRoute from './router/router'
import {createStore} from './store/store'

export function createApp() {
  const router = createRoute()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render:(h) => h(App)
  })
  return app
}
