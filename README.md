# npm-owned-modules [![Build Status](https://travis-ci.org/tobiaslabs/npm-owned-modules.svg?branch=master)](https://travis-ci.org/sdmp/npm-owned-modules)

[![NPM](https://nodei.co/npm/npm-owned-modules.png)](https://nodei.co/npm/npm-owned-modules/)

Get the list of npm modules owned by a user.

Although you can use [npm programmatically](https://www.npmjs.com/package/npm), you can't
actually list the modules that a user owns.

# using

Install it the normal way:

	npm install npm-owned-modules

You just call it with a string that's the user name:

```javascript
var ownedModules = require('npm-owned-modules')
ownedModules('saibotsivad', function(err, modules) {
	// modules array
})
```

The modules list is just a simple array of module name strings, e.g.:

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
