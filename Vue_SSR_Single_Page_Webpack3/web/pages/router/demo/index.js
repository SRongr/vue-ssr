import home from './component/home.vue'
import about from './component/about.vue'
import blog from './component/blog.vue'

// const home = () => import(/* webpackChunkName:'home'*/ '@/pages/router/demo/component/home.vue')
// const about = () => import(/* webpackChunkName:'about'*/ '@/pages/router/demo/component/about.vue')
// const blog = () => import(/* webpackChunkName:'blog'*/ '@/pages/router/demo/component/blog.vue')


const routes = [
  {
    path: '/',
    component: home,
    meta: 'home'
  },
  {
    path: '/home',
    component: home,
    meta: 'home'
  },
  {
    path: '/about',
    component: about,
    meta: 'about'
  },
  {
    path: '/blog',
    component: blog,
    meta: 'blog'
  }

]


export default routes