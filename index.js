var request = require('request')
var jsonStream = require('JSONStream')
var concat = require('concat-stream')
var qs = require('querystring')

function url(username) {
	return 'http://registry.npmjs.org/-/_view/browseAuthors?' + qs.stringify({
		group_level: 2,
		start_key: '["' + username + '"]',
		end_key: '["' + username + '",{}]'
	})
}
var parse = jsonStream.parse(['rows', true, 'key'], function map(row) {
	return [ row[1] ]
})

module.exports = function getNpmModules(username, cb) {
	request(url(username))
		.pipe(parse)
		.pipe(concat(cb.bind(null, null)))
}
