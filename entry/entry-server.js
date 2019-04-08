import {createApp} from '../src/main'

export default context => new Promise((resolve, rejects) => {
  let app = createApp()
  app.$router.push(context.url)   // 使用vue.$router跳转页面,否则只是路由跳转，请求不到页面资源.是因为后端的路由变化，前端没有办法进行跳转，前端只能通过vue-router 实例进行条跳转
  const matchComponents = app.$router.getMatchedComponents()
  if (matchComponents.length == 0) {   // 当前路由下面没有组件。即404
    rejects({code: 404})
  }
  Promise.all(matchComponents.map(component => {    // 遍历所有组件, 判断是否有带有自定义serverRequest 方法的组件 
    if (component.serverRequest) {
      return component.serverRequest(app.$store)    // 有的话就执行serverRequest 方法， 传入store
    }
  })).then(() => {    // 上面所有component 都遍历完了，执行完了，才会走then
    context.state = app.$store.state
    resolve(app)
  })

})
