
const postcssConfig = require('./postcss.config')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'development',  // 环境
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['env'],
            plugins:['syntax-dynamic-import'],
          },
        },
       
      },
      {
        test: /\.(css|styl(us)?)$/,         // 注意顺序
        use: [
          'vue-style-loader',
          'css-loader',
          postcssConfig,
          'stylus-loader',
        ]
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug-html-loader'
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}
