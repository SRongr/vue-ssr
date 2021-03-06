var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const isProd = process.env.NODE_ENV === 'production'
const postcssConfig = require('./postcss.config')

module.exports = {
  output: {
    path: path.resolve(__dirname, `../dist/`),
    publicPath: '/dist/',       //发布后在线访问的url
    filename: `js/[name].[hash:8].js`,   //'[name].[chunkhash].js', '[name].[hash:8].js'
    chunkFilename: 'js/[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../web'),
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          postcssConfig
        ],
      }, {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins:['syntax-dynamic-import'],
          },
        },
       
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[hash:8].[ext]'    //自动hash命名图片等资源，并修改路径。路径需要根据项目实际情况确定。语法参考：https://doc.webpack-china.org/loaders/file-loader/
        }
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug-html-loader'
      },
    ]
  },
  performance: {
    hints: false
  },
  plugins: isProd ? [
    new VueLoaderPlugin(),
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
  ] : [
    new VueLoaderPlugin()
  ],
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      //sourceMap: true,  //开启max_line_len后会有报错，二选一
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true,
        pure_funcs: ['alert']       //去除相应的函数
      },
      output: {
        max_line_len: 100
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
