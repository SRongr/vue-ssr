const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const config = require('../config')
const postcssConfig = require('./postcss.config')

const isProd = process.env.NODE_ENV === 'production'


module.exports = {
  devtool: isProd
    ? false
    : '#cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: isProd 
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      'public': path.resolve(__dirname, '../public')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug-html-loader'
      },
      {
        test: /\.(css|styl(us)?)$/,
        use: isProd
          ? ExtractTextPlugin.extract({
              use: [
                {
                  loader: 'css-loader',
                  options: { minimize: true }
                },
                postcssConfig,
                'stylus-loader'
              ],
              fallback: 'vue-style-loader'
            })
          : ['vue-style-loader', 'css-loader', postcssConfig, 'stylus-loader']
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: isProd
    ? [
        new VueLoaderPlugin(),
        //压缩js
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true, // 打包后去除console.log
              collapse_vars: true, // 内嵌定义了但是只用到一次的变量
              reduce_vars: true, // 提取出出现多次但是没有定义成变量去引用的静态值
              pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true // 使用多进程并行运行来提高构建速度
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ExtractTextPlugin({
          filename: 'css/common.[chunkhash].css'
        })
      ]
    : [
        new VueLoaderPlugin(),
        new FriendlyErrorsPlugin()
      ]
}
