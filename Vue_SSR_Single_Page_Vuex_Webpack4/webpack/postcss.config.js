// px转rem单位
// const px2rem = require('../public/js/px2rem')({
//   remUnit: 75,
//   exclude: 'src/App.vue'
// })
// 添加css前缀
const autoprefixer = require('autoprefixer')({
	browsers: [
		'> 1%',
		'last 2 versions',
		'iOS >= 8',
    'Safari >= 8',
		'not ie <= 8'
	]
})
// css未来特性兼容处理，包含autoprefixer了
// 所以如果配置cssnext可以不用配置autoprefixer，避免重复
// http://cssnext.io/
// const cssnext = require('postcss-cssnext')()
// 处理容器宽高比
// const aspectRatio = require('postcss-aspect-ratio-mini')()

module.exports = {
	loader: 'postcss-loader',
	options: {
		plugins: [
			autoprefixer,
			// cssnext,
			// aspectRatio
		]
	}
}