module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,jpg,html,json,md,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};