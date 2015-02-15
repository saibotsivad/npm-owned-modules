var Promise = require('promise')
var https = require('https')
var cheerio = require('cheerio')

module.exports = function getNpmModules(username, cb) {
	var promiseMaybe = new Promise(function(resolve, reject) {
		https.get('https://www.npmjs.com/~' + username, function(res) {
			res.setEncoding('utf8')
			res.on('data', function(body) {
				var modules = []
				var $ = cheerio.load(body)
				$('#profile #packages').parent().next().children().each(function(index, element) {
					$(element).children('a').each(function(i, e) {
						var href = $(this).attr('href')
						modules.push(href.replace('/package/', ''))
					})
				})
				resolve(modules)
			})
		})
	})
	if (typeof cb === 'function') {
		promiseMaybe.then(function(modules) {
			cb(false, modules)
		})
	} else {
		return promiseMaybe
	}
}
