
const Demo = () => import(/* webpackChunkName: "demo" */'@/views/Demo.vue')
const Test = () => import(/* webpackChunkName: "test" */'@/views/Test.vue')
const routes = [
  {
    path: '/',
    component: Demo,
    meta: {
      title: 'VueSSR'
    }
  },
  {
    path: '/test',
    component: Test,
    meta: {
      title: 'VueSSR'
    }
  }
]

export default routes
