var request = require('request')

module.exports = function getNpmModules(username, cb) {
	var url = 'https://registry.npmjs.org/-/user/' + encodeURIComponent(username) + '/package'

	request(url, function (error, response, body) {
		if (error) {
			cb(error)
		} else {
			try {
				var modules = JSON.parse(body).items.map(function(module) {
					return module.name
				})
				cb(false, modules)
			} catch (e) {
				cb(e)
			}
		}
	})
}
