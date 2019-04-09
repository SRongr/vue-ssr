const path = require('path')
const projectRoot = path.resolve(__dirname, '..')   // 声明根目录变量
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
module.exports = merge(base, {
  target: 'node',       // 目标 node 
  entry: path.join(projectRoot, 'entry/entry-server.js'),
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(projectRoot, 'dist'),
    filename: 'bundle.server.js'
  },
})
