var request = require('request')

module.exports = function getNpmModules(username, cb) {
	var url = 'https://registry.npmjs.org/-/user/' + encodeURIComponent(username) + '/package'

	request(url, function (error, response, body) {
		if (error) {
			cb(error)
		} else {
			try {
				var modules = Object.keys(JSON.parse(body))
				cb(false, modules)
			} catch (e) {
				cb(e)
			}
		}
	})
}
