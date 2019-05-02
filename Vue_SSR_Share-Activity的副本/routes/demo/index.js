module.exports = function (req, res) {
	res.render('demo', {
		name: 'Keep',
		title: 'demo',
		desc: '自律给我自由'
	})
}