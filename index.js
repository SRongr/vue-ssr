const path = require('path')
const express = require('express')
const render = require('vue-server-renderer')
const fs = require('fs')
const app = express()
const createApp = require('./dist/bundle.server')['default']  // 引入打包之后生成文件createApp 创建Vue 实例方法
const bundleUrl = 'bundle.client.js'
const temp = fs.readFileSync('./index.template.html').toString()  //  读取模板 html
const createRenderer = render.createRenderer({  // 以 temp 作为模板渲染
  template: temp
})
const serve = (file, cache) => express.static(path.resolve(__dirname, file), {
  maxAge: cache && 1 ? 1000 * 60 * 60 * 24 * 30 : 0
})


app.get('/api/getValue', (req, res) => {
  res.end('hello')
});
app.use('/', serve('./dist'))    // 调用express 的静态资源模块   否则无法引入buudle.client.js

app.get('*', (req, res) => {
  const ctx = {url: req.url}
  const vm = createApp(ctx).then(app => {     // 将请求的地址传入，可以在生成vue实例的时候拿到地址，跳转页面。
    // console.log(ctx)                        // 经过服务器入口文件，这里的ctx 添加了state 属性
    const state = JSON.stringify(ctx.state)
    createRenderer.renderToString(app,
      {
        init: `<script> window.__INITAL__ = ${state}</script>`,   // 修改全局的window.__INITAL__
        clientSrc: `<script src="/bundle.client.js"></script>`
      }, (err, html) => {
      res.end(html)
    })
  }).catch(err => {
    console.log(err)
    res.statusCode = 404
    res.end('404')
  })
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})