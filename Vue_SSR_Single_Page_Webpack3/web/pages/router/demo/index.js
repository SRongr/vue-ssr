import home from './component/home.vue'
import about from './component/about.vue'
import blog from './component/blog.vue'

// const home = () => import(/* webpackChunkName:'home'*/ './component/home.vue')
// const about = () => import(/* webpackChunkName:'about'*/ './component/about.vue')
// const blog = () => import(/* webpackChunkName:'blog'*/ './component/blog.vue')

const route = [
  {
    path: '/',
    component: home
},
{
    path: '/about',
    component: about 
},
{
    path: '/blog',
    component: blog
}

]


export default route