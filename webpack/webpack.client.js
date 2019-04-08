const path = require('path')
const projectRoot = path.resolve(__dirname, '..')   // 声明根目录变量
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
module.exports = merge(base, {
  entry: path.join(projectRoot, 'entry/entry-client.js'),
  output: {
    path: path.join(projectRoot, 'dist'),
    filename: 'bundle.client.js'
  }
})
