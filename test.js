var test = require('tape')
var ownedModules = require('./index')

test('get the modules', function(t) {
	ownedModules('saibotsivad', function(err, modules) {
		t.notOk(err, 'should not contain error')
		t.ok(modules, 'modules should exist')
		t.ok(Array.isArray(modules), 'modules should be an array')
		t.ok(modules.length > 0, 'modules should contain at least one')
		var allStrings = modules.every(function(module) {
			return typeof module === 'string'
		})
		t.notEqual(modules.indexOf('npm-owned-modules'), -1, 'modules array contains "npm-owned-modules"')
		t.ok(allStrings, 'all array objects should be strings')
		t.end()
	})
})
