
import { createApp } from './app'
export default context => new Promise((reslove, rejects) => {
  const { app, router, store } = createApp()
  router.push(context.url)
  const {meta} = router.resolve(context.url).route
  console.log(meta)
  context.title = meta
  const matchComponents = app.$router.getMatchedComponents()
  if (matchComponents.length === 0) {
    // rejects({code: 404,url: context.url,matchComponents})
  }
  Promise.all(matchComponents.map(component => {
    if(component.serverRequest) {
      return component.serverRequest(store)
    }
  })).then(() => {
    reslove(app)
    context.state = store.state
  }).catch(err => {
    console.log(err,12312)
  })
})
