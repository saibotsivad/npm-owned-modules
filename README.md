# npm-owned-modules [![Build Status](https://travis-ci.org/tobiaslabs/npm-owned-modules.svg?branch=master)](https://travis-ci.org/sdmp/npm-owned-modules)

[![NPM](https://nodei.co/npm/npm-owned-modules.png)](https://nodei.co/npm/npm-owned-modules/)

Get the list of npm modules owned by a user.

Although you can use [npm programmatically](https://www.npmjs.com/package/npm), you can't
actually list the modules that a user owns.

If there's a way to do it via an api, I couldn't find it. If you know of a way, please
make a pull request with the changes. That'd be so awesome. Until then, this is really
just a web page scraper.

# using

Install it the normal way:

	npm install npm-owned-modules

You can use it with a callback:

	var ownedModules = require('npm-owned-modules')
	ownedModules('saibotsivad', function(err, modules) {
		// modules array
	})

Or you can use it as a promise:

	var ownedModules = require('npm-owned-modules')
	ownedModules('saibotsivad').then(function(modules) {
		// modules array
	}, function(err) {
		// handle errors
	})

The modules list is just a simple array of module names, e.g.:

```javascript
var modules = [
	'npm-owned-modules',
	'ftp-core'
	// etc.
]
```

# license

Everything in this repository is released under the [VOL](http://veryopenlicense.com).

<3
