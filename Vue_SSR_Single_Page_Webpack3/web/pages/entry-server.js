/**
 * 用于打包服务器直出部分的逻辑
 */
import { createApp } from './app'
export default context => new Promise((reslove, rejects) => {
  const { app, router, store } = createApp()
  router.push(context.url)
  const matchComponents = app.$router.getMatchedComponents()
  if (matchComponents.length === 0) {
    rejects({code: 404})
  }
  Promise.all(matchComponents.map(component => {
    if(component.serverRequest) {
      return component.serverRequest(store)
    }
  })).then(() => {
    reslove(app)
    context.state = store.state
  }).catch(err => {
    console.log(err)
  })
})
