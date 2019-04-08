
import { createApp } from '../src/main.js'
const app = createApp()

if (window.__INITAL__) {
  app.$store.replaceState(window.__INITAL__)    // store替换state 的方法
}

// 绑定app根元素
window.onload = function () {
    app.$mount('#app')
} 